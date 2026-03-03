# Clifford Mark Musni - Portfolio
Career information

# 🚀 Features
Modern Tech Stack: React 19, TypeScript, Vite 6
Styled with Emotion: Utilizes @emotion/styled for component-based styling
Smooth Animations: Powered by Framer Motion
Optimized Performance:
Automatic code splitting
Brotli & Gzip compression
Lazy-loaded components
Bundle size visualization
Fully Responsive: Works seamlessly on all devices
Accessibility: ARIA labels and semantic HTML
Dark Mode Ready: Built-in theming support

# 🛠️ Installation
Clone the repository: git clone [https://github.com/cmmusni/cmm-portfolio.git](https://github.com/cmmusni/cmm-portfolio.git)

cd ccm-portfolio

Install dependencies:
npm install

Start the development server:
npm run dev

# 🔔 Device Access Notifications (Netlify + Email)

This portfolio now supports email alerts when accessed from a new device.

## How it works

- The frontend creates a persistent device ID in local storage.
- On first visit from that device, it calls a Netlify Function.
- The function sends you an email via Resend.

## Required Netlify environment variables

- `RESEND_API_KEY` - your Resend API key
- `ALERT_TO_EMAIL` - recipient email address
- `ALERT_FROM_EMAIL` - sender (example: `Portfolio Alerts <alerts@yourdomain.com>`)
- `ALERT_SUBJECT_PREFIX` (optional) - subject prefix like `CMM Portfolio`

`ALERT_FROM_EMAIL` must be a valid full email identity. Avoid incomplete values like `noreply@`.

## Notes

- This sends once per device/browser profile.
- Clearing local storage can trigger another alert from the same device.
- In local development, Netlify Functions require `netlify dev` to run serverless endpoints.
