<script setup lang="ts">
import { NaveProps } from "./data";
defineProps({ props: { type: Object as PropType<NaveProps>, required: true } });
</script>
<template>
  <div>
    <div
      id="square"
      class="FundoSite bg-[#000000] w-[100%] h-[100%] blur-[0.7px] absolute"
    ></div>
    <div class="ml-5">
      <div
        class="DivLasteral border-solid border-1 border-sky-400 h-[100vh] w-80 sticky"
      >
        <div class="About flex flex-col justify-center items-center mt-60">
          <img
            class="w-[250px] h-[250px]"
            src="https://kronus.kebook.com.br/assets/8898e345-c657-4704-be94-a853cca535b5.png"
            alt="photoHeitor"
          />
          <h3>Heitor Schleder</h3>
          <h4>Desenvolvedor</h4>  
          <ul class="flex space-x-2 p-0">
            <li><a href="https://google.com"><img class="w-6 h-6" src="./brand-facebook.png" alt=""></a></li>
            <li><a href="https://google.com"><img class="w-6 h-6" src="./brand-instagram.png" alt=""></a></li>
            <li><a href="https://google.com"><img class="w-6 h-6" src="./brand-linkedin.png" alt=""></a></li>
            <li><a href="https://google.com"><img class="w-6 h-6" src="./brand-github.png" alt=""></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.About {
  color: #b4aeae;
}
.FundoSite {
  z-index: 0;
}
.DivLasteral {
  z-index: 1;
  background-color: #000000ed;
}
#square {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='none' stroke='rgb(148 163 184 / 1)'%3e%3cpath d='M0 .5H15.5V16'/%3e%3c/svg%3e");
}
</style>
