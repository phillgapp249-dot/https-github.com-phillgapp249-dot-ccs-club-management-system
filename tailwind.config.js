/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    950: '#0b1117',
                    900: '#111b24',
                    800: '#1a2734',
                    700: '#26384c',
                },
                gray: {
                    50: 'rgb(var(--neutral-50) / <alpha-value>)',
                    100: 'rgb(var(--neutral-100) / <alpha-value>)',
                    200: 'rgb(var(--neutral-200) / <alpha-value>)',
                    300: 'rgb(var(--neutral-300) / <alpha-value>)',
                    400: 'rgb(var(--neutral-400) / <alpha-value>)',
                    500: 'rgb(var(--neutral-500) / <alpha-value>)',
                    600: 'rgb(var(--neutral-600) / <alpha-value>)',
                    700: 'rgb(var(--neutral-700) / <alpha-value>)',
                    800: 'rgb(var(--neutral-800) / <alpha-value>)',
                    900: 'rgb(var(--neutral-900) / <alpha-value>)',
                    950: 'rgb(var(--neutral-950) / <alpha-value>)',
                },
                slate: {
                    300: 'rgb(var(--palette-text-secondary) / <alpha-value>)',
                    700: 'rgb(var(--neutral-800) / <alpha-value>)',
                    800: 'rgb(var(--neutral-900) / <alpha-value>)',
                },
                brand: {
                    50: 'rgb(var(--brand-50) / <alpha-value>)',
                    100: 'rgb(var(--brand-100) / <alpha-value>)',
                    200: 'rgb(var(--brand-200) / <alpha-value>)',
                    300: 'rgb(var(--brand-300) / <alpha-value>)',
                    400: 'rgb(var(--brand-400) / <alpha-value>)',
                    500: 'rgb(var(--brand-500) / <alpha-value>)',
                    600: 'rgb(var(--brand-600) / <alpha-value>)',
                    700: 'rgb(var(--brand-700) / <alpha-value>)',
                    800: 'rgb(var(--brand-800) / <alpha-value>)',
                    900: 'rgb(var(--brand-900) / <alpha-value>)',
                    950: 'rgb(var(--brand-950) / <alpha-value>)',
                },
                red: {
                    50: '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#ef4444',
                    600: '#dc2626',
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d',
                    950: '#450a0a',
                },
                green: {
                    500: 'rgb(var(--palette-success) / <alpha-value>)',
                    600: 'rgb(var(--palette-success) / <alpha-value>)',
                },
                amber: {
                    500: 'rgb(var(--palette-warning) / <alpha-value>)',
                    600: 'rgb(var(--palette-warning) / <alpha-value>)',
                },
                indigo: {
                    500: 'rgb(var(--palette-secondary) / <alpha-value>)',
                    600: 'rgb(var(--palette-secondary) / <alpha-value>)',
                },
                cyan: {
                    500: 'rgb(var(--palette-accent) / <alpha-value>)',
                    600: 'rgb(var(--palette-accent) / <alpha-value>)',
                },
                blue: {
                    500: 'rgb(var(--palette-primary) / <alpha-value>)',
                    600: 'rgb(var(--palette-primary) / <alpha-value>)',
                },
                palette: {
                    primary: 'rgb(var(--palette-primary) / <alpha-value>)',
                    secondary: 'rgb(var(--palette-secondary) / <alpha-value>)',
                    accent: 'rgb(var(--palette-accent) / <alpha-value>)',
                    success: 'rgb(var(--palette-success) / <alpha-value>)',
                    warning: 'rgb(var(--palette-warning) / <alpha-value>)',
                    danger: 'rgb(var(--palette-danger) / <alpha-value>)',
                    background: 'rgb(var(--palette-background) / <alpha-value>)',
                    card: 'rgb(var(--palette-card) / <alpha-value>)',
                    cardAlt: 'rgb(var(--palette-card-alt) / <alpha-value>)',
                    textPrimary: 'rgb(var(--palette-text-primary) / <alpha-value>)',
                    textSecondary: 'rgb(var(--palette-text-secondary) / <alpha-value>)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                soft: '0 10px 30px -12px rgba(15, 23, 42, 0.15)',
                card: '0 1px 2px rgba(15, 23, 42, 0.06), 0 8px 24px -8px rgba(15, 23, 42, 0.08)',
            },
            borderRadius: {
                xl: '0.875rem',
                '2xl': '1.25rem',
            },
        },
    },
    plugins: [],
};
