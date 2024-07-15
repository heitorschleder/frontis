<script setup lang="ts">
import { scrollingProps } from "./data";
defineProps({
  props: { type: Object as PropType<scrollingProps>, required: true },
});
</script>
<template>
  <div class="flex w-full">
    <div id="LeftPart" class="flex-row items-end p-4 border">
      <p>lateral esquerda</p>
      <p>item da lateral</p>
      <p>item da lateral</p>
    </div>
    <div id="MiddlePart" class="flex-row content-center text-center items-center p-4 max-w-xl border">
      <div class="border rounded-md mt-2">
        <p>meio</p>
      </div>
      <div class="border rounded-md mt-2">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae numquam maxime repellendus, dolor voluptatem sequi obcaecati neque tempora quibusdam ratione. Autem blanditiis quam repellendus voluptatem id facilis aliquam non reprehenderit?</p>
      </div>
      <div class="border rounded-md mt-2">
        <img src="https://pbs.twimg.com/media/GSi1XJtXMAAWXxS?format=jpg&name=large" alt="">
      </div>
    </div>
    <div id="RightPart" class="flex-row items-start p-4 border">
      <p>lateral direita</p>
    </div>
  </div>
</template>
<style scoped></style>
