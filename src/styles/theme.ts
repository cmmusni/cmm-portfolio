// All color values are CSS custom properties so the whole app
// re-themes automatically when html[data-theme] changes.
const colors = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  accent: "var(--color-accent)",
  light: "var(--color-light)",
  text: "var(--color-text)",
  textLight: "var(--color-text-light)",
  textDark: "var(--color-text-dark)",
  body: {
    background: "var(--body-bg)",
  },
  container: {
    main: "var(--container-main)",
  },
  glass: {
    background: "var(--glass-bg)",
    border: "var(--glass-border)",
    card: "var(--glass-card)",
  },
  gradient: {
    main: "var(--gradient-main)",
    accent: "var(--gradient-accent)",
    glass: "var(--gradient-glass)",
  },
  overlay: {
    light: "var(--overlay-light)",
    dark: "var(--overlay-dark)",
  },
};

const baseTheme = {
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem",
  },
  transitions: {
    default: "0.3s ease",
  },
};

// CSS vars handle switching — getTheme always returns the same var references.
export const getTheme = () => ({
  colors,
  ...baseTheme,
});

export const theme = getTheme();

export type Theme = ReturnType<typeof getTheme>;
