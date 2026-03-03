import { useEffect } from "react";

const DEVICE_ID_KEY = "cmm_device_id_v1";
const ALERT_SENT_KEY = "cmm_device_alert_sent_v1";
const ALERT_INFLIGHT_KEY = "cmm_device_alert_inflight_v1";

const createDeviceId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `device_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
};

const getOrCreateDeviceId = () => {
  const existing = localStorage.getItem(DEVICE_ID_KEY);
  if (existing) {
    return existing;
  }

  const created = createDeviceId();
  localStorage.setItem(DEVICE_ID_KEY, created);
  return created;
};

export const useDeviceAccessAlert = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const alreadySent = localStorage.getItem(ALERT_SENT_KEY) === "1";
    const inFlight = sessionStorage.getItem(ALERT_INFLIGHT_KEY) === "1";

    if (alreadySent || inFlight) {
      return;
    }

    const userAgent = navigator.userAgent || "unknown";
    if (/bot|spider|crawler|headless/i.test(userAgent)) {
      return;
    }

    sessionStorage.setItem(ALERT_INFLIGHT_KEY, "1");

    const deviceId = getOrCreateDeviceId();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const screenSize = `${window.screen.width}x${window.screen.height}`;

    fetch("/.netlify/functions/device-access-alert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        deviceId,
        path: window.location.href,
        timezone,
        language: navigator.language,
        screen: screenSize,
        platform: navigator.platform,
        userAgent,
      }),
    })
      .then((response) => {
        if (response.ok) {
          localStorage.setItem(ALERT_SENT_KEY, "1");
        }
      })
      .catch((error) => {
        console.warn("Device access alert failed", error);
      })
      .finally(() => {
        sessionStorage.removeItem(ALERT_INFLIGHT_KEY);
      });
  }, []);
};
