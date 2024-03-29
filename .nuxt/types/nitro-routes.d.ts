// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/getAvailableTimes': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/getAvailableTimes').default>>>>
    }
    '/api/getCoupom': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/getCoupom').default>>>>
    }
    '/api/getSections': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/getSections').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}