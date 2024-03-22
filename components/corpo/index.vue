<script setup lang="ts">
import { CorpoProps } from './data';
defineProps({ props: { type: Object as PropType<CorpoProps>, required: true } });
</script>
<template>
  <section id="MainBody" class="bg-[#000000] w-[100%] h-[100%] p-3">
    <section id="Navegator">
      <div class="flex flex-row-reverse p-6">
        <div class=" bg-[#000000ed] border-solid border-1 border-sky-400 h-10 w-[450px] flex justify-start">
          <nav class="flex space-x-10 p-2">
            <a class="NavIten pl-8" href="#About">Sobre</a>
            <a class="NavIten pl-0" href="#Projects">Projects</a>
            <a class="NavIten pl-0" href="#Certifies">Certifies</a>
            <a class="NavIten pl-0" href="#Skills">Skills</a>
          </nav>
        </div>
      </div>
    </section>
    <section id="PhotoAndSocials" class="Infos flex ">
      <div class="DivLasteral border-solid border-1 border-sky-400 h-[100vh] w-80 mt-0">
        <div class="About flex flex-col justify-center items-center mt-60 ">
          <img class="w-[250px] h-[250px]"
            src="https://kronus.kebook.com.br/assets/8898e345-c657-4704-be94-a853cca535b5.png" alt="userPhoto" />
          <h3>{{props.userName}}</h3>
          <h4>Desenvolvedor</h4>
          <ul class="flex space-x-2 p-0">
            <li><a href="https://google.com"><img class="w-6 h-6" src="./images/brand-facebook.png" alt="facebook"></a>
            </li>
            <li><a href="https://google.com"><img class="w-6 h-6" src="./images/brand-instagram.png"
                  alt="instagram"></a></li>
            <li><a href="https://google.com"><img class="w-6 h-6" src="./images/brand-linkedin.png" alt="linkedin"></a>
            </li>
            <li><a href="https://google.com"><img class="w-6 h-6" src="./images/brand-github.png" alt="github"></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="space-y-9">
        <section id="AboutBrand" class="justify-end flex flex-row-reverse text-orange-50">
          <div class="border border-sky-400 bg-[#000000ed] w-[900px] h-[200px] p-2">
            <h1 class="ml-2 text-lg">Description</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, culpa? Veritatis totam error dolores odit. Quasi suscipit, enim, harum quam corporis nobis voluptatibus, provident deleniti soluta corrupti beatae exercitationem voluptatum?</p>
          </div>
        </section>
        <section id="Projects">
          <div class="border border-sky-400 bg-[#000000ed] w-[900px] h-[300px] ">

          </div>
        </section>
        <section id="Certifies">
          <div class="border border-sky-400 bg-[#000000ed] w-[900px] h-[300px] ">

          </div>
        </section>
        <section id="Skills">
          <div class="border border-sky-400 bg-[#000000ed] w-[900px] h-[300px] ">

          </div>
        </section>
      </div>

    </section>
  </section>
</template>
<style>
.About {
  color: #b4aeae;
}

.NavIten {
  text-decoration: none;
  color: #efebeb;
}

.NavIten:hover {
  color: aqua;
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
}
</style>

