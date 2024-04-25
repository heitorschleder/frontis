<script setup lang="ts">
import { NavegatorProps } from "./data";
defineProps({
  props: { type: Object as PropType<NavegatorProps>, required: true },
});
</script>

<template>
    <section id="Navegator">
      <div class="flex flex-row-reverse p-6">
        <div class="bg-[#000000ed] border-solid border-1 border-sky-400 h-10 w-[450px] flex justify-start">
          <nav class="flex space-x-10 p-2">
            <a
              class="text-slate-100 no-underline pl-8 hover:text-blue-600 hover:animate-[wiggle_1s_ease-in-out_infinite]"
              href="#About">Sobre</a>
            <a
              class="text-slate-100 no-underline pl-0 hover:text-blue-600 hover:animate-[wiggle_1s_ease-in-out_infinite]"
              href="#Projects"
              >Projects</a
            >
            <a
              class="text-slate-100 no-underline pl-0 hover:text-blue-600 hover:animate-[wiggle_1s_ease-in-out_infinite]"
              href="#Certifies"
              >Certifies</a
            >
            <a
              class="text-slate-100 no-underline pl-0 hover:text-blue-600 hover:animate-[wiggle_1s_ease-in-out_infinite]"
              href="#Skills"
              >Skills</a
            >
          </nav>
        </div>
      </div>
    </section>
</template>