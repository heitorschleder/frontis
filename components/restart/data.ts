export interface RestartProps {
    userName: string;
    userPhoto: string;
    userEspec: string;
    userDesc: string;
    aboutTitle: string;
    
    titleCert: string;
    nameCert1: string;
    timeCert1: string;

    nameCert2: string;
    timeCert2: string;

    linkInsta: string;
    linkGithub: string;
    linkFace: string;
    linkLinkedin: string;

    projects: Projects[];
    skills: Skills[];
}
export interface Skills {
    id: number;
    colorSkill: string;
    title: string;
    description: string;
    image: string;
    percent: string;
}
export interface Projects {
    id: number;
    title: string;
    about: string;
    image: string;
    linkView: string;
    linkSource: string;
}
export const restartProps = {
    userPhoto: "https://devheitorschleder.netlify.app/images/heitor.png.png",
    userName: 'Heitor teste',
    userEspec: "Dev",

    linkInsta: "https://www.instagram.com/heitor_schleder/",
    linkGithub: "https://github.com/heitorschleder",
    linkFace: "https://www.facebook.com/heitor.schleder",
    linkLinkedin: "https://www.linkedin.com/in/heitor-de-oliveira-schleder-10345a1ab/",

    userDesc: "Olá! Meu nome é Heitor. Sou formado em Ciência de Dados e trabalho como desenvolvedor fullstack. Tenho experiência com diversas linguagens de programação, incluindo JavaScript, PHP, Java, SQL, SQLite e Python, além de frameworks como Vue.js (usando Nuxt) e, ocasionalmente, React. Também possuo conhecimento em versionamento com Git e em Docker. Além disso, tenho experiência com ferramentas como Directus, Cloudflare, Google Cloud, Google Analytics, entre outras. Tenho um grande interesse em aprender novas tecnologias e estou sempre estudando para me manter atualizado com as demandas do mercado.",
    
    aboutTitle: "Olá! ",

    skills: [{
        id: 1,
        colorSkill: "#00000000",
        title: "Javascript",
        image: "https://kronus.kebook.com.br/assets/6e81e244-364d-4597-98b9-71b3dc8cc881.png",
    },
    {
        id: 2,
        colorSkill: "#00000000",
        title: "VueJS",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
    },
    {
        id: 3,
        colorSkill: "#00000000",
        title: "Html5",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
    },
    {
        id: 4,
        colorSkill: "#00000000",
        title: "CSS",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
    },
    {
        id: 5,
        colorSkill: "#00000000",
        title: "Tailwind",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
    },
    {
        id: 6,
        colorSkill: "#00000000",
        title: "Bootstrap",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
    },
    {
        id: 7,
        colorSkill: "#00000000",
        title: "React",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
    },
    {
        id: 8,
        colorSkill: "#00000000",
        title: "Svelte",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
    },
    {
        id: 9,
        colorSkill: "#00000000",
        title: "Elden Ring",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
    },
    {
        id: 10,
        colorSkill: "#00000000",
        title: "Sekiro",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
    },],

    projects: [{
        id: 1,
        title: "example number one",
        about: "Front End construído com tecnologias de desenvolvimento atuais",
        image: "https://kronus.kebook.com.br/assets/8898e345-c657-4704-be94-a853cca535b5/expert-mid.png.webp?format=webp&quality=80",
        linkView: "https://google.com",
        linkSource: "https://google.com/projetinhoae"
    },
    {
        id: 2,
        title: "example number two",
        about: "gameplays elevadas de maneira duvidosa",
        image: "https://kronus.kebook.com.br/assets/b9a390f7-d02a-4d83-a88d-ace5d927832e/expert-mid-2.png.webp?format=webp&quality=80",
        linkView: "https://google.com",
        linkSource: "https://google.com/projetinhoae"
    },
    {
        id: 3,
        title: "Pokedex que todo mundo tem",
        about: "Projeto de estudo com consumo de APIs, Javascript, Html e Css",
        image: "https://devheitorschleder.netlify.app/images/project1.jpg",
        linkView: "https://projectpokedex-heitor.netlify.app/",
        linkSource: "https://github.com/heitorschleder/Pokedex"
    },
    {
        id: 4,
        title: "Conversor de Moedas",
        about: "Apenas teste para aprendizado com consumo de APIs utilizando VueJs",
        image: "https://devheitorschleder.netlify.app/images/project2.jpg",
        linkView: "https://project-conversor.netlify.app/",
        linkSource: "https://github.com/heitorschleder/Conversor"
    },
    {
        id: 5,
        title: "Página Pessoal",
        about: "Realizado basicamente só com html e css (bootstrap5)",
        image: "https://devheitorschleder.netlify.app/images/heitor.png.png",
        linkView: "https://devheitorschleder.netlify.app/",
        linkSource: "https://github.com/heitorschleder/portfolio"
    },
    ],

    titleCert: "formações & certificados",
    
    nameCert1: "Técnologo em Ciência de Dados",
    timeCert1: "Data da Conclusão: 06/2024",
    
    nameCert2: "Curso Vue JS 2 - O Guia Completo",
    timeCert2: "46 horas",
} as RestartProps;