import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
        '/jokes':'http://localhost:4600' // isme hm http/jokes hi hai ye jha use krna hai vha bus /jokes put kr do api call ho jaye gi
    }
  },
  plugins: [react()],
})
