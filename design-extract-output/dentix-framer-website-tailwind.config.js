/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(78, 74%, 97%)',
            '100': 'hsl(78, 74%, 94%)',
            '200': 'hsl(78, 74%, 86%)',
            '300': 'hsl(78, 74%, 76%)',
            '400': 'hsl(78, 74%, 64%)',
            '500': 'hsl(78, 74%, 50%)',
            '600': 'hsl(78, 74%, 40%)',
            '700': 'hsl(78, 74%, 32%)',
            '800': 'hsl(78, 74%, 24%)',
            '900': 'hsl(78, 74%, 16%)',
            '950': 'hsl(78, 74%, 10%)',
            DEFAULT: '#5b7a12'
        },
        secondary: {
            '50': 'hsl(240, 100%, 97%)',
            '100': 'hsl(240, 100%, 94%)',
            '200': 'hsl(240, 100%, 86%)',
            '300': 'hsl(240, 100%, 76%)',
            '400': 'hsl(240, 100%, 64%)',
            '500': 'hsl(240, 100%, 50%)',
            '600': 'hsl(240, 100%, 40%)',
            '700': 'hsl(240, 100%, 32%)',
            '800': 'hsl(240, 100%, 24%)',
            '900': 'hsl(240, 100%, 16%)',
            '950': 'hsl(240, 100%, 10%)',
            DEFAULT: '#0000ee'
        },
        'neutral-50': '#000000',
        'neutral-100': '#ffffff',
        'neutral-200': '#838996',
        'neutral-300': '#6b7280',
        'neutral-400': '#4b5363',
        'neutral-500': '#f9fafb',
        'neutral-600': '#e5e7eb',
        background: '#f3f4f6',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Manrope',
            'sans-serif'
        ],
        body: [
            'Times',
            'sans-serif'
        ]
    },
    fontSize: {
        '12': [
            '12px',
            {
                lineHeight: 'normal'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '16.8px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '27px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '31.2px',
                letterSpacing: '-1.2px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '38.4px',
                letterSpacing: '-1.28px'
            }
        ],
        '40': [
            '40px',
            {
                lineHeight: '48px',
                letterSpacing: '-2px'
            }
        ],
        '48': [
            '48px',
            {
                lineHeight: '48px',
                letterSpacing: '-1.44px'
            }
        ],
        '72': [
            '72px',
            {
                lineHeight: '79.2px',
                letterSpacing: '-2.88px'
            }
        ]
    },
    spacing: {
        '1': '2px',
        '20': '40px',
        '24': '48px',
        '32': '64px',
        '40': '80px',
        '80': '160px',
        '99px': '99px'
    },
    borderRadius: {
        md: '10px',
        lg: '16px',
        xl: '20px',
        full: '100px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0.12) 0px 2px 3px 0px',
        xs: 'rgba(0, 0, 0, 0.15) 0px 1px 2px 0px, rgba(255, 255, 255, 0.25) 0px 1px 1px 1px inset, rgba(0, 0, 0, 0.25) 0px -1px 1px 1px inset',
        md: 'rgba(0, 0, 0, 0.04) 0px 0px 12px 0px'
    },
    screens: {
        md: '810px',
        '900px': '900px'
    },
    container: {
        center: true,
        padding: '48px'
    },
    maxWidth: {
        container: '1700px'
    }
},
  },
};
