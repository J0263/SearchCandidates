import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    define: {
      'process.env.VITE_GITHUB_TOKEN': JSON.stringify(env.VITE_GITHUB_TOKEN),
    },
  };
});