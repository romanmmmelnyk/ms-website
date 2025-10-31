/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_API: string
  readonly VITE_MODELS_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
