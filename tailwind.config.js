/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Updated brand colors to match the pink/red fashion theme
        brand: {
          DEFAULT: "hsl(330 80% 45%)", // Primary color
          light: "hsl(330 80% 65%)", // Lighter shade
          dark: "hsl(330 80% 35%)", // Darker shade
          accent: "hsl(330 80% 55%)", // Accent shade
          success: "#10b981", // Emerald 500
          warning: "#f59e0b", // Amber 500
          error: "#ef4444", // Red 500
          gray: "#64748b", // Slate 500
        },
        // Fashion-specific colors updated to match primary theme
        fashion: {
          primary: "hsl(330 80% 45%)", // Primary color
          secondary: "hsl(330 80% 55%)", // Secondary shade
          accent: "hsl(330 90% 50%)", // Accent shade
          neutral: "#f8fafc", // Slate 50
          dark: "#1e293b", // Slate 800
          gradient: {
            start: "hsl(330 80% 75%)", // Light shade
            mid: "hsl(330 80% 55%)", // Medium shade
            end: "hsl(330 80% 35%)", // Dark shade
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite linear",
      },
      backgroundImage: {
        "fashion-gradient": "linear-gradient(135deg, hsl(330 80% 75%) 0%, hsl(330 80% 55%) 50%, hsl(330 80% 35%) 100%)",
        "fashion-gradient-hover":
          "linear-gradient(135deg, hsl(330 80% 70%) 0%, hsl(330 80% 50%) 50%, hsl(330 80% 30%) 100%)",
        "fashion-pattern": "url('/kaleidoscope-threads.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
