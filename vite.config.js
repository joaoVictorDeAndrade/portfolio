import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/ui/components'),
      '@app': path.resolve(__dirname, 'src/app'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://joaoandrade.dev.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
