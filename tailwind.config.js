import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("light", "html.light &");
    }),
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#FAFAFA",
        surface: "#FFFFFF",
        muted: "#F4F4F5",
        ink: {
          DEFAULT: "#18181B",
          soft: "#3F3F46",
          muted: "#71717A",
        },
        pastel: {
          cyan: "#CFFAFE",
          sky: "#E0F2FE",
          violet: "#EDE9FE",
          mint: "#D1FAE5",
          rose: "#FFE4E6",
        },
        cyan: {
          50: "#ecf9fd",
          100: "#cef1f8",
          200: "#a0e7f3",
          300: "#60d9ed",
          400: "#2bc9e3",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        electric: "#0066ff",
        neon: {
          blue: "#0066ff",
          cyan: "#06b6d4",
          purple: "#a855f7",
          pink: "#ec4899",
          green: "#10b981",
        },
        dark: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
      },
      letterSpacing: {
        elegant: "0.02em",
        wide: "0.08em",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        neon: "0 0 10px rgba(6, 182, 212, 0.5)",
        "neon-lg": "0 0 20px rgba(6, 182, 212, 0.8)",
        "neon-blue": "0 0 10px rgba(0, 102, 255, 0.5)",
        "neon-purple": "0 0 10px rgba(168, 85, 247, 0.5)",
        soft: "0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04)",
        card: "0 2px 8px rgba(0, 0, 0, 0.04), 0 12px 32px rgba(0, 0, 0, 0.05)",
        elevated: "0 4px 20px rgba(0, 0, 0, 0.06), 0 8px 32px rgba(0, 0, 0, 0.04)",
        navbar: "0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
};
