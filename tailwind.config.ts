import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["var(--font-space-grotesk)"],
        spaceMono: ["var(--font-space-mono)"],
        mortendExtrabold: ["var(--font-mortend-extrabold)"],
        mortendExtraboldOutline: ["var(--font-mortend-extrabold-outline)"],
        mortendLight: ["var(--font-mortend-light)"],
      },
      colors: {
        brown: {
          "400": "var(--brown-400)",
          "500": "var(--brown-500)",
        },
        black: {
          "300": "var(--black-300)",
          "500": "var(--black-500)",
          "700": "var(--black-700)",
        },
        white: {
          "100": "var(--white-100)",
          "500": "var(--white-500)",
        },
        teal: {
          "500": "var(--teal-500)",
          "700": "var(--teal-700)",
        },
        green: {
          "500": "var(--green-500)",
        },
        gray: {
          "200": "var(--gray-200)",
        },
        error: {
          DEFAULT: "var(--error)",
        },
        warning: {
          DEFAULT: "var(--warning)",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: {
          DEFAULT: "var(--input)",
          background: "var(--input-background)",
        },
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            width: "0",
          },
          to: {
            width: "var(--radix-accordion-content-width)",
          },
        },
        "accordion-up": {
          from: {
            width: "var(--radix-accordion-content-width)",
          },
          to: {
            width: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
