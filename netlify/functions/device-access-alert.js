const BOT_UA_REGEX = /bot|spider|crawler|headless/i;
const SIMPLE_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value) => (typeof value === "string" ? value.trim() : "");

const extractEmail = (value) => {
  const normalized = clean(value).replace(/\s+/g, " ");
  const bracketMatch = normalized.match(/<([^>]+)>/);

  if (bracketMatch?.[1]) {
    return bracketMatch[1].trim();
  }

  return normalized;
};

const isValidEmail = (value) => SIMPLE_EMAIL_REGEX.test(clean(value));

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const resendApiKey = clean(process.env.RESEND_API_KEY);
  const alertToEmail = clean(process.env.ALERT_TO_EMAIL);

  const configuredFrom = clean(process.env.ALERT_FROM_EMAIL);
  const configuredFromEmail = extractEmail(configuredFrom);

  const alertFromEmail = isValidEmail(configuredFromEmail)
    ? configuredFrom
    : "Portfolio Alerts <onboarding@resend.dev>";

  if (!resendApiKey || !alertToEmail) {
    return json(500, { error: "Missing alert configuration" });
  }

  if (!isValidEmail(alertToEmail)) {
    return json(500, { error: "ALERT_TO_EMAIL is invalid" });
  }

  try {
    const payload = JSON.parse(event.body || "{}");

    const {
      deviceId = "unknown",
      path = "unknown",
      timezone = "unknown",
      language = "unknown",
      screen = "unknown",
      platform = "unknown",
      userAgent = "unknown",
    } = payload;

    if (BOT_UA_REGEX.test(userAgent)) {
      return json(200, { skipped: true });
    }

    const now = new Date().toISOString();

    const subjectPrefix = process.env.ALERT_SUBJECT_PREFIX || "Portfolio";
    const subject = `${subjectPrefix}: New device access detected`;

    const text = [
      "A new device accessed your portfolio.",
      "",
      `Time (UTC): ${now}`,
      `URL: ${path}`,
      `Device ID: ${deviceId}`,
      `Platform: ${platform}`,
      `Language: ${language}`,
      `Timezone: ${timezone}`,
      `Screen: ${screen}`,
      `User Agent: ${userAgent}`,
      `IP: ${event.headers["x-forwarded-for"] || "unknown"}`,
    ].join("\n");

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: alertFromEmail,
        to: [alertToEmail],
        subject,
        text,
      }),
    });

    if (!emailResponse.ok) {
      const errorBody = await emailResponse.text();
      return json(502, {
        error: "Failed to send alert email",
        details: errorBody,
        hint: "Check ALERT_FROM_EMAIL format and Resend verified sender domain.",
      });
    }

    return json(200, { ok: true });
  } catch (error) {
    return json(500, {
      error: "Unexpected error",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
