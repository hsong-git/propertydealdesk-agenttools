import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Codex previews can need polling for HMR in sandboxed environments.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";

export default defineConfig(() => {
  return {
    server: isCodexSeatbeltSandbox
      ? { watch: { useFsEvents: false, usePolling: true } }
      : undefined,
    plugins: [react()],
  };
});
