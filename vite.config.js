import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'

export default {
    root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '@fortawesome': path.resolve(__dirname, 'node_modules/@fortawesome')
    }
  },

  server: {
    port: 8080,
    hot: true
  }
}
