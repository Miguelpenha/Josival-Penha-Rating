declare global {
    namespace NodeJS {
      interface ProcessEnv {
        SECRET_JWT: string
        MONGODB_URL: string
        NEXT_PUBLIC_DOMAIN: string
      }
    }
}

export {}