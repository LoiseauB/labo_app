import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({include: [/\.tsx$/, /\.md$/],}),],
  base:'/labo_app/',
  assetsInclude:['**/*.md'],
})
