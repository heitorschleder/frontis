<script setup lang="ts">
import { restartProps } from "./data";
defineProps({
  props: { type: Object as PropType<restartProps>, required: true },
});
</script>
<template>
  <div class="flex-col xl:flex justify-center bg-slate-300 h-screen">
    <div id="LeftPart" class="flex p-4 items-center bg-slate-300 ml-44">
      <div class="flex-col text-center justify-center items-center p-2 ">
        <img v-if="props.userPhoto" class="max-h-60 max-w-60 mb-6 rounded-full" :src="props.userPhoto" alt="userPhoto" />
        <h3>{{ props.userName }}</h3>
        <h4>{{ props.userEspec }}</h4>
        <ul class="flex justify-center space-x-2 p-0">
          <li v-if="props.linkFace">
            <a :href="props.linkFace"><img class=" bg-[#172236] rounded-full p-1 w-8 h-8 hover:-translate-y-[2px]"
                src="./images/brand-facebook.png" alt="linkFace" /></a>
          </li>
          <li v-if="props.linkGithub">
            <a :href="props.linkGithub"><img class=" bg-[#172236] rounded-full p-1 w-8 h-8 hover:-translate-y-[2px]"
                src="./images/brand-github.png" alt="linkGithub" /></a>
          </li>
          <li v-if="props.linkLinkedin">
            <a :href="props.linkLinkedin"><img class=" bg-[#172236] rounded-full p-1 w-8 h-8 hover:-translate-y-[2px]"
                src="./images/brand-linkedin.png" alt="linkLinkedin" /></a>
          </li>
          <li v-if="props.linkInsta">
            <a :href="props.linkInsta"><img class=" bg-[#172236] rounded-full p-1 w-8 h-8 hover:-translate-y-[2px]"
                src="./images/brand-instagram.png" alt="linkInsta" /></a>
          </li>
        </ul>
        <div class="flex-col text-center mt-4">
          <h4>Skills:</h4>
          <v-carousel height="200" :show-arrows="false" cycle hide-delimiters hide-delimiter-background>
            <v-carousel-item v-for="skill in props.skills" :key="skill.id">
              <v-sheet :color="skill.colorSkill" height="100%">
                <div class="SkillsBlock">
                  <img :src="skill.image" alt="" class="SkillImage">
                  <div class="d-flex fill-height justify-center align-center">
                    <div class="">
                      <h5>{{ skill.title }}</h5>
                    </div>
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </div>
    <div id="MiddlePart" class="flex-row content-center text-center items-center p-4 h-[18rem] w-[60rem]">
      <div class="border rounded-md mt-2 z-[-1]">
        <AboutBrand :props="{
            aboutTitle: props.aboutTitle,
            userDesc: props.userDesc,
          }" />
      </div>
      <div id="Projects" class="border rounded-md mt-2 ">
        <section>
          <div class="text-black hover:border border-sky-500 duration-200">
            <v-carousel hide-delimiters style="height: 100%">
              <v-carousel-item v-for="projects in props.projects" :key="projects.id" class="CardItem">
                <div class="grid grid-rows-2 grid-flow-col gap-1">
                  <img :src="projects.image" alt="imageProject"
                    class="hover:animate-spin row-span-3 p-2 ml-2 h-64 mt-6 rounded-full object-contain object-center" />
                  <div class="col-span-2 mt-5 ml-2">
                    <h2>{{ projects.title }}</h2>
                    <p class="max-h-10 h-5">{{ projects.about }}</p>
                  </div>
                  <div class="row-span-2 col-span-2 mt-10 ml-2">
                    <div class="flex space-x-2 p-0">
                      <a class="hover:-translate-y-[2px]" :href="projects.linkView"><img
                          class="p-1 w-8 h-8 bg-[#172236] rounded-full" src="./images/eye.png" alt="the project" /></a>
                      <a class="hover:-translate-y-[2px]" :href="projects.linkSource"><img
                          class="p-1 w-8 h-8 bg-[#172236] rounded-full" src="./images/brand-github.png" alt="source code" /></a>
                    </div>
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
        </section>
      </div>
      <div class="border rounded-md mt-2 ">
        <section id="Certifies">
          <div class="text-center max-h-80 hover:border border-sky-500 duration-200">
            <h3
              class="mt-2 font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-violet-500">
              {{ props.titleCert }}
            </h3>
            <div class="flex justify-center space-x-4">
              <div class="flex-col text-center justify-center items-center">
                <a class="text-slate-100 no-underline" href="https://google.com">
                  <img class="max-w-[450px] max-h-[150px] rounded hover:scale-[1.1] duration-300"
                    src="https://matriculas.estacio.br/blog/wp-content/uploads/2020/02/30est01-ciencia-dados.jpg"
                    alt="" />
                </a>
                <div class="text-center">
                  <h5 class="">{{ props.nameCert1 }}</h5>
                  <h5 class="">{{ props.timeCert1 }}</h5>
                </div>
              </div>
              <div class="flex-col text-center justify-center items-center">
                <a class="text-slate-100 no-underline" href="https://google.com">
                  <img class="max-w-[350px] max-h-[150px] rounded hover:scale-[1.1] duration-300"
                    src="https://img-c.udemycdn.com/course/480x270/2037548_028f.jpg" alt="" />
                </a>
                <div class="text-center">
                  <h5 class="">{{ props.nameCert2 }}</h5>
                  <h5 class="">{{ props.timeCert2 }}</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped>
.SkillImage {
  width: 100px;
  height: 100px;
}
.SkillsBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
