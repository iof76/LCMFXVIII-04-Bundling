interface ImportMetaEnv {
   readonly VITE_API_BASE: string;
   readonly VITE_ENABLE_FEATURE_A: Boolean;
}

interface ImportMeta {
readonly env: ImportMetaEnv;
}