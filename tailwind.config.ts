
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8E9196",
          dark: "#6B6E72",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
        accent: {
          DEFAULT: "#54d4d2",
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
        },
        gold: {
          DEFAULT: "#efcf3f",
          50: "var(--gold-50)",
          100: "var(--gold-100)",
          200: "var(--gold-200)",
          300: "var(--gold-300)",
          400: "var(--gold-400)",
          500: "var(--gold-500)",
          600: "var(--gold-600)",
          700: "var(--gold-700)",
          800: "var(--gold-800)",
          900: "var(--gold-900)",
        },
        navbg: "#221F26",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "pulse-slow": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-100% 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
        "gradient-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "border-glow": {
          "0%": { boxShadow: "0 0 5px rgba(142, 145, 150, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(142, 145, 150, 0.8)" },
          "100%": { boxShadow: "0 0 5px rgba(142, 145, 150, 0.5)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.8s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "gradient-flow": "gradient-flow 5s ease infinite",
        "border-glow": "border-glow 3s ease-in-out infinite",
      },
      boxShadow: {
        'glow-primary': 'var(--glow-primary)',
        'glow-accent': 'var(--glow-accent)',
        'glow-gold': 'var(--glow-gold)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
        'gradient-accent': 'linear-gradient(135deg, var(--gradient-start), var(--gradient-accent))',
        'gradient-gold': 'linear-gradient(135deg, var(--gradient-start), var(--gradient-gold))',
        'gradient-mesh': 'radial-gradient(circle at 0% 0%, var(--primary-300) 0%, transparent 50%), radial-gradient(circle at 100% 0%, var(--accent-400) 0%, transparent 50%), radial-gradient(circle at 100% 100%, var(--primary-500) 0%, transparent 50%), radial-gradient(circle at 0% 100%, var(--gold-400) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
