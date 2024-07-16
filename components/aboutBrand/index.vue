<script setup lang="ts">
import { AboutBrandProps } from "./data";
defineProps({
  props: { type: Object as PropType<AboutBrandProps>, required: true },
});
</script>
<template>
    <section
          id="AboutBrand"
          class="hover:-translate-y-[2px] hover:border border-sky-500 duration-200"
        >
          <div
            class="p-2"
          >
            <h1 class="ml-2 text-lg tracking-wider">{{ props.aboutTitle }}</h1>
            <p class="gracinha tracking-wider flex z-[-1]">{{ props.userDesc }}</p>
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