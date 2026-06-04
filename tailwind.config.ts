import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#E8EDE5',
          dark:    '#D8DED5',
          darker:  '#C8CEC5',
        },
        ink: {
          DEFAULT: '#0A0A0A',
          soft:    '#1A1A1A',
          mid:     '#5A5A5A',
          muted:   '#8A8A8A',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        dm:       ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem',   { lineHeight: '1.0',  fontWeight: '700' }],
        'display-l':  ['3.5rem', { lineHeight: '1.05', fontWeight: '700' }],
        'display-m':  ['2.5rem', { lineHeight: '1.1',  fontWeight: '600' }],
        'heading-l':  ['1.75rem',{ lineHeight: '1.2',  fontWeight: '600' }],
        'heading-m':  ['1.25rem',{ lineHeight: '1.3',  fontWeight: '500' }],
        'body-l':     ['1.05rem',{ lineHeight: '1.7',  fontWeight: '400' }],
        'body-m':     ['0.9rem', { lineHeight: '1.6',  fontWeight: '400' }],
        'caption':    ['0.75rem',{ lineHeight: '1.5',  fontWeight: '500' }],
      },
      letterSpacing: {
        tight:   '-0.02em',
        tighter: '-0.03em',
        badge:   '0.08em',
        label:   '0.10em',
      },
      borderRadius: {
        btn: '4px',
        card: '8px',
      },
      spacing: {
        '4xl': '128px',
        '3xl': '96px',
        '2xl': '64px',
      },
    },
  },
  plugins: [],
}

export default config
