interface ImportMetaEnv {
   readonly VITE_API_BASE: string;
   readonly VITE_ENVIROMENT_STRING: String;
}

interface ImportMeta {
readonly env: ImportMetaEnv;
}