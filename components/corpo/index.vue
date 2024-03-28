<script setup lang="ts">
import { CorpoProps } from "./data";
import { onMounted } from "vue";
import { ref } from "vue";
defineProps({
  props: { type: Object as PropType<CorpoProps>, required: true },
});
const playAudioOnClick = () => {
  const audio: HTMLAudioElement | null = document.getElementById(
    "myAudio"
  ) as HTMLAudioElement;
  if (audio) {
    audio.play();
  }
};
onMounted(() => {
  playAudioOnClick();
});
</script>
<template>
  <v-app id="MainBody" class="w-[100%] h-[100%] p-3">
    <!-- <div class="">
     lembrar de dar hidden nessa parada de musica ai
    <button @click="playAudioOnClick">Play Audio</button>
    <audio controls id="myAudio">
      <source src="./images/song.mp3" type="audio/mp3" />
    </audio>
    </div>  -->
    <section>
      <section id="Navegator">
        <div class="flex flex-row-reverse p-6">
          <div class="bg-[#000000ed] border-solid border-1 border-sky-400 h-10 w-[450px] flex justify-start">
            <nav class="flex space-x-10 p-2">
              <a class="NavIten pl-8" href="#About">Sobre</a>
              <a class="NavIten pl-0" href="#Projects">Projects</a>
              <a class="NavIten pl-0" href="#Certifies">Certifies</a>
              <a class="NavIten pl-0" href="#Skills">Skills</a>
            </nav>
          </div>
        </div>
      </section>
      <section id="PhotoAndSocials" class="Infos flex">
        <div class="DivLasteral border-solid border-1 border-sky-400 h-[100vh] w-80 mt-0">
          <div class="About flex flex-col justify-center items-center mt-60">
            <img class="w-[250px] h-[250px]" :src="props.userPhoto" alt="userPhoto" />
            <h3>{{ props.userName }}</h3>
            <h4>{{ props.userEspec }}</h4>
            <ul class="flex space-x-2 p-0">
              <li>
                <a href="https://google.com"><img class="w-6 h-6" src="./images/brand-facebook.png"
                    alt="facebook" /></a>
              </li>
              <li>
                <a href="https://google.com"><img class="w-6 h-6" src="./images/brand-instagram.png"
                    alt="instagram" /></a>
              </li>
              <li>
                <a href="https://google.com"><img class="w-6 h-6" src="./images/brand-linkedin.png"
                    alt="linkedin" /></a>
              </li>
              <li>
                <a href="https://google.com"><img class="w-6 h-6" src="./images/brand-github.png" alt="github" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="space-y-9">
          <section id="AboutBrand" class="justify-end flex flex-row-reverse text-orange-50">
            <div class="border border-sky-400 bg-[#000000ed] w-[900px] h-[200px] p-2">
              <h1 class="ml-2 text-lg">Description</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo, culpa? Veritatis totam error dolores odit. Quasi
                suscipit, enim, harum quam corporis nobis voluptatibus, provident
                deleniti soluta corrupti beatae exercitationem voluptatum?
              </p>
            </div>
          </section>
          <section id="Projects">
            <div class="border border-sky-400 bg-[#000000ed] w-[900px] h-[300px] text-orange-50">
              <v-carousel hide-delimiters style="height: 100%;">
                <v-carousel-item v-for="projects in props.projects" :key="projects.id" class="CardItem">
                  <div class="grid grid-rows-2 grid-flow-col gap-1">
                    <img :src="projects.image" alt="imageProject" class="row-span-3 p-2 ml-2 mt-6 h-[250px] w-[250px] rounded-full object-contain object-center border-solid border-1 border-sky-400">
                    <div class="col-span-2 mt-5">
                      <h2>{{ projects.title }}</h2>
                      <p>{{ projects.about }}</p>
                    </div>
                    <div class="row-span-2 col-span-2">
                      <div class="flex space-x-2 p-0 ">
                        <a :href="projects.linkView"><img class="w-8 h-8 bg-gray-500 rounded-full" src="./images/eye.png" alt=""></a>
                        <a :href="projects.linkSource"><img class="w-8 h-8 bg-gray-500 rounded-full" src="./images/brand-github.png" alt=""></a>
                      </div>
                    </div>
                  </div>
                </v-carousel-item>
              </v-carousel>
            </div>
          </section>
          <section id="Certifies">
            <div class="border border-sky-400 bg-[#000000ed] w-[900px] h-[300px]">
              <div>

              </div>
            </div>
          </section>
          <section id="Skills">
            <div class="border border-sky-400 bg-[#000000ed] w-[900px] h-[300px]">
              <div>

              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  </v-app>
</template>
<style>
.About {
  color: #fff9f9;
}

.CardItem {
  height: 100%;
  display: flex !important;
  justify-content: center;
  align-content: center;
}

.NavIten {
  text-decoration: none;
  color: #ffffff;
}


.Infos {
  justify-content: space-around;
}

.DivLasteral {
  background-color: #000000ed;
}

#MainBody {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='none' stroke='rgb(148 163 184 / 1)'%3e%3cpath d='M0 .5H15.5V16'/%3e%3c/svg%3e");
  filter: blur(0.5px);
  background-color: #000;
}
</style>
