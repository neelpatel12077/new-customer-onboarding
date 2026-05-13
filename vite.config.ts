import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Avoid forcing host/port in embedded runtimes (e.g., Sandpack) to prevent TIME_OUT.
    // Let the environment choose an available port and bind appropriately.
    strictPort: false
  },
  preview: {
    strictPort: false
  }
});
