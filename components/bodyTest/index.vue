<script setup lang="ts">
import { UsersHandler } from "@directus/sdk";
import { BodyTestProps } from "./data";
import { onMounted, ref } from "vue";
defineProps({
  props: { type: Object as PropType<BodyTestProps>, required: true },
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

let numbers = [10, 10, 10];
const someall = numbers.reduce((ind, numbersito) => { return ind + numbersito;});
const mediall = someall / numbers.length;
console.log(mediall)


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
    <aside id="PhotoAndSocials" class="Infos flex">
      <div
        class="DivLasteral text-orange-50 border-solid border-1 border-sky-400 h-[100vh] w-80 mt-0"
      >
        <div class="About flex flex-col justify-center items-center mt-60">
          <img v-if="props.userPhoto"
            class="w-[250px] h-[250px]"
            :src="props.userPhoto"
            alt="userPhoto"
          />
          <h3>{{ props.userName }}</h3>
          <h4>{{ props.userEspec }}</h4>
          <ul class="flex space-x-2 p-0">
            <li v-for="socials in props.socials" :key="socials.socialId">
              <a :href="socials.socialLink"
                ><img
                  class="w-6 h-6"
                  :src="socials.socialImage"
                  :alt="`${socials.type}-icon`"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="space-y-9">
        <AboutBrand :props="{
          aboutTitle: props.aboutTitle,
          userDesc: props.userDesc,
        }"/>
        <section id="Projects">
          <div
            class="border border-sky-400 bg-[#000000ed] w-[900px] h-[300px] text-orange-50"
          >
            <v-carousel hide-delimiters style="height: 100%">
              <v-carousel-item
                v-for="projects in props.projects"
                :key="projects.id"
                class="CardItem"
              >
                <div class="grid grid-rows-2 grid-flow-col gap-1">
                  <img
                    :src="projects.image"
                    alt="imageProject"
                    class="hover:animate-spin row-span-3 p-2 ml-2 mt-6 h-[250px] w-[250px] rounded-full object-contain object-center border-solid border-1 border-sky-400"
                  />
                  <div class="col-span-2 mt-5">
                    <h2>{{ projects.title }}</h2>
                    <p>{{ projects.about }}</p>
                  </div>
                  <div class="row-span-2 col-span-2">
                    <div class="flex space-x-2 p-0">
                      <a class="hover:animate-bounce" :href="projects.linkView"
                        ><img
                          class="w-8 h-8 bg-gray-500 rounded-full"
                          src="./images/eye.png"
                          alt="linktoviewtheproject"
                      /></a>
                      <a
                        class="hover:animate-bounce"
                        :href="projects.linkSource"
                        ><img
                          class="w-8 h-8 bg-gray-500 rounded-full"
                          src="./images/brand-github.png"
                          alt="linktoviewthesourcecode"
                      /></a>
                    </div>
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
        </section>
        <section id="Skills">
          <div class="border border-sky-400 bg-[#000000ed] w-[900px] h-[300px]">
            <div class="flex flex-col justify-center items-center p-2">
              <h3 class="text-orange-50 tracking-widest mt-2 uppercase">
                skills and softskills
              </h3>
              <div>
                <v-carousel
                  class="Swiper"
                  height="240"
                  :show-arrows="false"
                  cycleP
                  hide-delimiter-background
                  hide-delimiters
                >
                  <v-carousel-item
                    v-for="skill in props.skills"
                    :key="skill.id"
                    class="text-orange-50"
                  >
                    <v-sheet
                      :color="skill.colorSkill"
                      height="100%"
                      class="Card"
                    >
                      <div
                        class="d-flex fill-height justify-center align-center space-x-5"
                      >
                        <div
                          class="flex flex-col justify-center items-center space-y-5"
                        >
                          <img
                            :src="skill.image"
                            class="w-[50px] h-[50px]"
                            alt=""
                          />
                          <h2 class="tracking-widest lowercase">
                            {{ skill.title }}
                          </h2>
                          <div>{{ skill.percent }}</div>
                        </div>
                        <div>
                          <p>{{ skill.description }}</p>
                        </div>
                      </div>
                    </v-sheet>
                  </v-carousel-item>
                </v-carousel>
              </div>
            </div>
          </div>
        </section>
        <section id="Certifies">
          <div class="border border-sky-400 bg-[#000000ed] w-[900px] h-[300px] text-center">
            <h3 class=" mt-2 font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-violet-500">
                {{ props.titleCert }}
            </h3>
            <div class="flex justify-center p-2">
              
              <div class="flex space-x-5">
                <div class="flex-1">
                  <a
                    class="text-slate-100 no-underline"
                    href="https://google.com"
                  >
                    <img
                      class="w-[350px] h-[150px] rounded grayscale hover:scale-[1.1] duration-300"
                      src="https://matriculas.estacio.br/blog/wp-content/uploads/2020/02/30est01-ciencia-dados.jpg"
                      alt=""
                    />
                    <div class="relative h-250 w-450 text-center">
                      <h5 class="mt-2">Técnologo em Ciência de Dados</h5>
                      <h5 class="absolute inset-x-0 -bottom-[50px]">Data da Conclusão: 06/2024</h5>
                    </div>
                  </a>
                </div>
                <div class="flex-1">
                  <a
                    class="text-slate-100 no-underline"
                    href="https://google.com"
                  >
                    <img
                      class="w-[350px] h-[150px] rounded grayscale hover:scale-[1.1] duration-300"
                      src="https://img-c.udemycdn.com/course/480x270/2037548_028f.jpg"
                      alt=""
                    />
                    <div class="relative h-250 w-450 text-center">
                      <h5 class="mt-2 ">Curso Vue JS 2 - O Guia Completo</h5>
                      <h5 class="absolute inset-x-0 -bottom-[50px]">46 horas</h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  </v-app>
</template>
<style scoped>
.Swiper {
  width: 80vh !important;
  max-width: 400px;
}
.Card {
  color: #fff9f9 !important;
}
.CardItem {
  height: 100%;
  display: flex !important;
  justify-content: center;
  align-content: center;
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
