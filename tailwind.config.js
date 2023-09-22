module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
         light: {
          primary: '#CD5C5C',    // Light Orange as primary
            secondary: '#FFC300',  // Yellow as secondary for light mode
          tertiary: '#FF5733',   // Light Orange for tertiary
          success: '#4CAF50',   // Green color for success
          info: '#03A9F4',      // Light Blue for info
          warning: '#FF9800',   // Orange for warning
          danger: '#F44336',    // Red color for danger
          text: '#333333',      // Dark gray text
          link: '#0073e6',      // Deep blue link color
          muted: '#767676',     // Light gray for muted elements
          // Add other light mode colors as needed
        },
        dark: {
          primary: '#000000',   // Black as primary in dark mode
          secondary: '#FFC300',  // Yellow as secondary for light mode
          tertiary: '#FF5733',   // Light Orange for tertiary
          success: '#008000',   // Green color for success in dark mode
          info: '#0000FF',      // Blue color for info in dark mode
          warning: '#FFD700',   // Yellow color for warning in dark mode
          danger: '#FF0000',    // Red color for danger in dark mode
          text: '#ffffff',      // White text in dark mode
          link: '#0000FF',      // Blue link color in dark mode
          muted: '#A9A9A9',     // Light gray for muted elements in dark mode
          // Add other dark mode colors as needed
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
