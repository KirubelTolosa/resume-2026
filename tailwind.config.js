/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        panel: 'var(--color-panel)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        accent2: 'var(--color-accent-2)',
        code: 'var(--color-code)',
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px var(--color-border), 0 12px 24px -12px rgba(0,0,0,0.45)',
      },
    },
  },
  plugins: [],
}

