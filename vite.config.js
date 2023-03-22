import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: 'window',
  },
  plugins: [react()],
  server: {
    port: 8000,
    host: '0.0.0.0',
  },
});
