/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_URL: string = "http://localhost:8080";
  // readonly PUBLIC_URL: string = "https://wedding-back.fly.dev";
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
