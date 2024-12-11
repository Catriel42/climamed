/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Breakpoints personalizados
      screens: {
        'custom': '1407px',
        'xs': '480px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      // Colores actualizados según la nueva paleta
      colors: {
        primary: '#1f192f',   // color1 - Morado oscuro
        secondary: '#2d6073', // color2 - Azul petróleo
        accent: '#65b8a6',    // color3 - Verde agua
        highlight: '#b5e8c3', // color4 - Verde claro
        light: '#f0f7da',     // color5 - Beige claro
        muted: '#f5f5f5',     // Mantenemos este color neutro
      },
      // El resto de la configuración permanece igual...
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        'xxs': '0.65rem',
        '3xl': '1.875rem',
        '5xl': '3.5rem',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        fadeInBounce: 'fadeInBounce 1s ease-in-out',
        bounceSlow: 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInBounce: {
          '0%': {
            opacity: 0,
            transform: 'translateY(50px) scale(0.95)',
          },
          '50%': {
            opacity: 0.7,
            transform: 'translateY(-10px) scale(1.02)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0) scale(1)',
          },
        },
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'xl-dark': '0 10px 20px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      width: {
        'content': '85%',
        'card': '18rem',
      },
      height: {
        'hero': '90vh',
        'card': '24rem',
      },
    },
  },
  plugins: [],
};