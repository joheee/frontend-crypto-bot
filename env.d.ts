/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FREE_TELEGRAM: string;
  readonly VITE_PAID_TELEGRAM: string;
  // Add more environment variables as needed...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
