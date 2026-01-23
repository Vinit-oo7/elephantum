/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // 🔥 CUSTOM BREAKPOINT SYSTEM (Chrome + Fold safe)
    screens: {
      xs: "320px",      // mobile S
      sm: "375px",      // mobile
      ml: "425px",      // mobile L
      md: "768px",      // tablet
      lg: "1024px",     // laptop
      xl: "1440px",     // laptop L
      "2xl": "1536px",  // fold main
      "3xl": "1920px",  // full HD
      "4xl": "2560px",  // 4K / ultra-wide
    },

    extend: {
      /* ================= COLORS (unchanged logic) ================= */
      colors: {
        border: "var(--color-border)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",

        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },

        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },

        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },

        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },

        destructive: {
          DEFAULT: "var(--color-destructive)",
          foreground: "var(--color-destructive-foreground)",
        },
      },

      /* ================= CONTAINER CONTROL ================= */
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.25rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "3rem",
          "3xl": "4rem",
          "4xl": "5rem",
        },
      },

      /* ================= MAX WIDTHS (NO STRETCHING) ================= */
      maxWidth: {
        "screen-3xl": "1920px",
        "screen-4xl": "2560px",
      },

      /* ================= SPACING SCALE (FOLD SAFE) ================= */
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },

      /* ================= FONT SCALING ================= */
      fontSize: {
        "xs-fluid": "clamp(0.75rem, 1vw, 0.875rem)",
        "sm-fluid": "clamp(0.875rem, 1vw, 1rem)",
        "base-fluid": "clamp(1rem, 1.1vw, 1.125rem)",
        "lg-fluid": "clamp(1.125rem, 1.2vw, 1.25rem)",
        "xl-fluid": "clamp(1.25rem, 1.4vw, 1.5rem)",
      },
    },
  },
  plugins: [],
};
