import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const rootDirectory = path.dirname(fileURLToPath(import.meta.url));
  const config = {
    plugins: [react()],
    resolve: {
      alias: {
        '@components': path.resolve(rootDirectory, 'src/ui/components'),
        '@app': path.resolve(rootDirectory, 'src/app'),
      },
    },
    ssr: {
      noExternal: true,
    },
  };

  if (mode === 'development') {
    config.server = {
      proxy: {
        '/api': {
          target: 'https://joaoandrade.dev.br',
          changeOrigin: true,
          rewrite: (requestPath) => requestPath.replace(/^\/api/, ''),
        },
      },
    };
  }

  return config;
});
