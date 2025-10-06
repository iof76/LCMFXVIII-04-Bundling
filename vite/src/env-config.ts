const config = {
  API_BASE: import.meta.env.VITE_API_BASE,
  ENVIROMENT_STRING: import.meta.env.VITE_ENVIROMENT_STRING,
} as const;

export default config;