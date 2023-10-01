declare global {
    namespace NodeJS {
      interface ProcessEnv {
        SECRET_JWT: string
        MONGODB_URL: string
        SECRET_KEY_CRYPTO: string
        NEXT_PUBLIC_DOMAIN: string
        NEXT_PUBLIC_GOOGLE_CLIENT_ID: string
        NEXT_PUBLIC_LOGIN_COOKIE_NAME: string
      }
    }
}

export {}