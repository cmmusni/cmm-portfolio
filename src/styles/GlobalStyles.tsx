import { Global, css } from "@emotion/react";
import { theme } from "./theme";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap");

  /* ── Default palette: light/bright profile ── */
  :root {
    color-scheme: light;
    --color-primary: #62be6a;
    --color-secondary: #3f8f53;
    --color-accent: #f3ae45;
    --color-light: #8ad893;
    --color-text: #0f172a;
    --color-text-light: #4b5563;
    --color-text-dark: #1f2937;
    --body-bg: linear-gradient(160deg, #f0f4f8 0%, #e8edf3 55%, #dde4ec 100%);
    --container-main: rgba(255, 255, 255, 0.95);
    --glass-bg: rgba(255, 255, 255, 0.82);
    --glass-border: rgba(17, 24, 39, 0.12);
    --glass-card: rgba(17, 24, 39, 0.06);
    --gradient-main: linear-gradient(135deg, #ffffff 0%, #f6f8fb 50%, #f0f4f8 100%);
    --gradient-accent: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    --gradient-glass: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.05) 0%,
      rgba(15, 23, 42, 0.02) 100%
    );
    --overlay-light: rgba(37, 99, 235, 0.15);
    --overlay-dark: rgba(255, 255, 255, 0.3);
  }

  /* ── Dark override: charcoal portfolio ── */
  html[data-theme="dark"] {
    color-scheme: dark;
    --color-text: #f8fafc;
    --color-text-light: #e5e7eb;
    --color-text-dark: #f8fafc;
    --body-bg: linear-gradient(160deg, #3a3c40 0%, #43454a 55%, #2f3136 100%);
    --container-main: rgba(47, 49, 54, 0.72);
    --glass-bg: rgba(58, 60, 64, 0.58);
    --glass-border: rgba(138, 216, 147, 0.28);
    --glass-card: rgba(98, 190, 106, 0.18);
    --gradient-main: linear-gradient(135deg, #3a3c40 0%, #43454a 50%, #2f3136 100%);
    --gradient-accent: linear-gradient(135deg, #f3ae45 0%, #ffd07a 100%);
    --gradient-glass: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    --overlay-light: rgba(243, 174, 69, 0.25);
    --overlay-dark: rgba(31, 35, 39, 0.5);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    overflow-x: hidden;
    width: 100%;
    transition: background 0.3s ease, color 0.3s ease;
  }

  body {
    font-family: ${theme.fonts.body};
    color: var(--color-text);
    line-height: 1.6;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--body-bg);
    background-attachment: fixed;
    transition: background 0.35s ease, color 0.35s ease;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    line-height: 1.3;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  section {
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    &::before,
    &::after {
      display: none;
    }
  }

  .container {
    width: min(90%, 1200px);
    margin-inline: auto;
    padding-inline: ${theme.spacing.md};
    position: relative;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    html {
      font-size: 14px;
    }
  }

  @media print {
    html {
      font-size: 12pt;
    }

    body {
      background: white !important;
      color: black !important;
      margin: 0;
      padding: 0;
    }

    /* Ensure proper page breaks */
    section {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    h1,
    h2,
    h3 {
      page-break-after: avoid;
      break-after: avoid;
    }

    img {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* Remove unnecessary elements */
    .no-print,
    button,
    nav,
    .social-links {
      display: none !important;
    }

    /* Ensure links are useful in printed version */
    a {
      text-decoration: none !important;
      color: black !important;
    }

    a[href^="http"]:after {
      content: " (" attr(href) ")";
      font-size: 0.8em;
      font-style: italic;
    }

    /* Improve readability */
    p,
    li {
      orphans: 3;
      widows: 3;
    }

    /* Reset backgrounds and colors */
    * {
      background: transparent !important;
      color: black !important;
      text-shadow: none !important;
      filter: none !important;
      -ms-filter: none !important;
      box-shadow: none !important;
    }

    /* Add page numbers */
    @page {
      margin: 2cm;
    }

    @page :first {
      margin-top: 3cm;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.glass.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.glass.card};
    border-radius: 5px;
    border: 2px solid ${theme.colors.glass.border};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.accent};
  }

  /* Screen reader only utility class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />;
