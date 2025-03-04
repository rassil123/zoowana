/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",  // Inclure ton fichier HTML principal
    "./styles/*.html", // Inclure tous les fichiers HTML dans le dossier "styles"
    "./styles/**/*.css", // Inclure les fichiers CSS dans le dossier "styles" (si besoin)
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#f0e2b6', 
      },
      
    },
  },
  plugins: [],
}
