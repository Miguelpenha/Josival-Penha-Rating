declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_DOMAIN: string
      }
    }
}

export {}