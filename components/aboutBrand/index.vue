<script setup lang="ts">
import { AboutBrandProps } from "./data";
defineProps({
  props: { type: Object as PropType<AboutBrandProps>, required: true },
});
</script>
<template>
    <section
          id="AboutBrand"
          class="text-orange-50 border-1 border-solid border-sky-500 transition ease-in-out delay-150 hover:-translate-y-[2px] hover:scale-105 duration-500"
        >
          <div
            class="border border-sky-400 bg-[#000000ed] w-[900px] h-[200px] p-2"
          >
            <h1 class="ml-2 text-lg tracking-wider">{{ props.aboutTitle }}</h1>
            <p class="gracinha tracking-wider flex">{{ props.userDesc }}</p>
          </div>
        </section>
</template>
<style scoped>
.gracinha {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</style>