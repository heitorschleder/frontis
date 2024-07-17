<script setup lang="ts">
import { restartProps } from "./data";
defineProps({
  props: { type: Object as PropType<restartProps>, required: true },
});
</script>
<template>
  <div class="BodySide grid justify-center xl:flex xl:justify-center xl:h-[100vh]">
    <div id="LeftPart" class="flex p-4 items-center justify-center">
      <div class="flex-col text-center justify-center items-center p-2 ">
        <img v-if="props.userPhoto" class="max-h-60 max-w-60 mb-6 rounded-full" :src="props.userPhoto" alt="userPhoto" />
        <h3>{{ props.userName }}</h3>
        <h4>{{ props.userEspec }}</h4>
        <ul class="flex justify-center space-x-2 p-0">
          <li v-if="props.linkFace">
            <a :href="props.linkFace"><img class=" ButtonsColor rounded-full p-1 w-8 h-8 hover:-translate-y-[2px]"
                src="./images/brand-facebook.png" alt="linkFace" /></a>
          </li>
          <li v-if="props.linkGithub">
            <a :href="props.linkGithub"><img class=" ButtonsColor rounded-full p-1 w-8 h-8 hover:-translate-y-[2px]"
                src="./images/brand-github.png" alt="linkGithub" /></a>
          </li>
          <li v-if="props.linkLinkedin">
            <a :href="props.linkLinkedin"><img class=" ButtonsColor rounded-full p-1 w-8 h-8 hover:-translate-y-[2px]"
                src="./images/brand-linkedin.png" alt="linkLinkedin" /></a>
          </li>
          <li v-if="props.linkInsta">
            <a :href="props.linkInsta"><img class=" ButtonsColor rounded-full p-1 w-8 h-8 hover:-translate-y-[2px]"
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
    <div id="MiddlePart" class="flex-row content-center text-center items-center p-2 xl:w-2/4">
      <div class="border rounded-md mt-2 z-[-1]">
        <AboutBrand :props="{
            aboutTitle: props.aboutTitle,
            userDesc: props.userDesc,
          }" />
      </div>
      <div id="Projects" class="Projects border rounded-md mt-2 ">
        <section>
          <div class="hover:border duration-200">
            <v-carousel hide-delimiters style="height: 90%">
              <v-carousel-item v-for="projects in props.projects" :key="projects.id" class="CardItem">
                <div class="flex flex-col md:grid md:grid-rows-2 md:grid-flow-col md:gap-1">
                  <img :src="projects.image" alt="imageProject"
                    class="hover:scale-105 hover:animate-pulse duration-200 row-span-3 p-2 ml-2 h-64 mt-2 md:mt-6 rounded-full object-contain object-center" />
                  <div class="col-span-2 mt-5 ml-2">
                    <h2>{{ projects.title }}</h2>
                    <p class="max-h-10 h-8">{{ projects.about }}</p>
                  </div>
                  <div class="flex flex-row justify-center mb-2 md:row-span-2 md:col-span-2 md:mt-10 md:ml-2">
                    <div class="flex space-x-2 p-0">
                      <a class="hover:-translate-y-[2px]" :href="projects.linkView"><img
                          class="p-1 w-8 h-8 ButtonsColor rounded-full" src="./images/eye.png" alt="the project" /></a>
                      <a class="hover:-translate-y-[2px]" :href="projects.linkSource"><img
                          class="p-1 w-8 h-8 ButtonsColor rounded-full" src="./images/brand-github.png" alt="source code" /></a>
                    </div>
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
        </section>
      </div>
      <div class="border rounded-md mt-2">
        <section id="Certifies" class="hover:border duration-200">
            <h3
              class="mt-2 font-bold tracking-widest uppercase bg-clip-text text-transparent Certifies">
              {{ props.titleCert }}
            </h3>
            <div class="flex flex-col p-2 items-center content-center space-y-4 justify-center md:flex-row md:space-x-4">
              <div class="flex-col text-center justify-center items-center">
                <a class="flex text-center justify-center items-center no-underline" :href="props.linkCert1">
                  <img class="max-w-[450px] max-h-[150px] rounded hover:scale-[1.1] duration-300"
                    :src="props.imageCert1"
                    alt="" />
                </a>
                <div class="text-center">
                  <h5 class="">{{ props.nameCert1 }}</h5>
                  <h5 class="">{{ props.timeCert1 }}</h5>
                </div>
              </div>
              <div class="flex-col text-center justify-center items-center">
                <a class="flex text-center justify-center items-center no-underline" :href="props.linkCert2">
                  <img class="max-w-[350px] max-h-[150px] rounded hover:scale-[1.1] duration-300"
                    :src="props.imageCert2" alt="" />
                </a>
                <div class="text-center">
                  <h5 class="">{{ props.nameCert2 }}</h5>
                  <h5 class="">{{ props.timeCert2 }}</h5>
                </div>
              </div>
            </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped>

.ButtonsColor{
  background-color: #010b9d;
}
.Certifies{
  background-image: linear-gradient(to right, var(--color-certifies1), var(--color-certifies2));
}
.BodySide {
  background-color: var(--color-background);
  color: var(--color-font);
}
.Projects {
  color: var(--color-font);
}
.SkillImage {
  width: 100px;
  height: 100px;
}
.SkillsBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: var(--color-font);
}
</style>
