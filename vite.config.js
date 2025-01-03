import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/ui/components'),
      '@app': path.resolve(__dirname, 'src/app'),
    },
  },
  server:
    mode === 'development'
      ? {
          proxy: {
            '/api': {
              target: 'https://joaoandrade.dev.br',
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ''),
            },
          },
        }
      : {},
}));
