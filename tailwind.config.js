/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#060608',
        accent: '#E9F23A',
        accentDeep: '#C7D400',
        cyan: '#3EE0F0',
        redx: '#FF4D4D',
      },
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
        chip: '20px',
        field: '16px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 12px 40px rgba(0,0,0,0.5)',
        accent: '0 8px 24px rgba(233,242,58,0.35)',
        cyan: '0 8px 24px rgba(62,224,240,0.3)',
      },
    },
  },
  plugins: [],
}
