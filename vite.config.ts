import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config tuned for sandboxed/embedded runtimes (e.g., Sandpack/Codespaces)
// to reduce "Couldn't connect to server" / TIME_OUT issues.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on all interfaces (required in many sandboxes)
    port: 5173,
    strictPort: true,
    open: false,
    hmr: {
      // Use WebSocket (default) but ensure it can connect in embedded iframes.
      // clientPort helps when the runtime exposes a different external port.
      protocol: 'ws',
      clientPort: 443,
    },
    watch: {
      // Sandboxed FS often needs polling to detect changes reliably.
      usePolling: true,
      interval: 250,
    },
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
  },
});
