
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cipher: {
					primary: 'var(--cipher-primary, #00ffcc)',
					secondary: 'var(--cipher-secondary, #66ff66)',
					danger: 'var(--cipher-danger, #ff3366)',
					dark: 'var(--cipher-dark, #121212)',
					darker: 'var(--cipher-darker, #0a0a0a)',
					light: 'var(--cipher-light, #e0e0e0)',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'text-flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 204, 0.7)' },
					'50%': { boxShadow: '0 0 20px rgba(0, 255, 204, 0.9)' },
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'text-flicker': 'text-flicker 2s linear infinite',
				'pulse-glow': 'pulse-glow 1.5s ease-in-out infinite',
				'typing': 'typing 3.5s steps(40, end)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
	safelist: [
		{
			pattern: /from-(transparent|.*)/,
		},
		{
			pattern: /via-(transparent|.*)/,
			variants: ['hover', 'focus', 'group-hover'],
		},
		{
			pattern: /to-(transparent|.*)/,
		},
		{
			pattern: /bg-gradient-to-(t|tr|r|br|b|bl|l|tl)/,
		},
	],
} satisfies Config;
