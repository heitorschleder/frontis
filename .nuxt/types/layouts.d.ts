import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/heitor.schleder/Documents/stud/devHS/front savepoint/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}