export const theme = {
  colors: {
    primary: "#62BE6A",
    secondary: "#3F8F53",
    accent: "#F3AE45",
    light: "#8AD893",
    text: "#F8FAFC",
    textLight: "#E5E7EB",
    textDark: "#F8FAFC",
    body: {
      background: "linear-gradient(160deg, #3A3C40 0%, #43454A 55%, #2F3136 100%)",
    },
    container: {
      main: "rgba(47, 49, 54, 0.72)",
    },
    glass: {
      background: "rgba(58, 60, 64, 0.58)",
      border: "rgba(138, 216, 147, 0.28)",
      card: "rgba(98, 190, 106, 0.18)",
    },
    gradient: {
      main: "linear-gradient(135deg, #3A3C40 0%, #43454A 50%, #2F3136 100%)",
      accent: "linear-gradient(135deg, #F3AE45 0%, #FFD07A 100%)",
      glass:
        "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    },
    overlay: {
      light: "rgba(243, 174, 69, 0.25)",
      dark: "rgba(31, 35, 39, 0.5)",
    },
  },
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

export type Theme = typeof theme;
