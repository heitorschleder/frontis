import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = string
declare module "C:/Users/heitor.schleder/Documents/frontis/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}