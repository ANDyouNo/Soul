import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://andyouno.github.io/Soul/", // Убедитесь, что здесь правильный путь
});
