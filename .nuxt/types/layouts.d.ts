import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/Heitor Schleder/Documents/Estudos/Front/frontis/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}