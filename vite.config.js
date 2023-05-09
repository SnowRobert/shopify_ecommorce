import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./",
  plugins: [hydrogen(), react()],
  resolve: {
    alias: [{find: /^~\/(.*)/, replacement: '/src/$1'}],
  },
  optimizeDeps: {
    include: ['@headlessui/react', 'clsx', 'react-use', 'typographic-base'],
  },
  test: {
    globals: true,
    testTimeout: 10000,
    hookTimeout: 10000,
  },
});