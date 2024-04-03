export interface CorpoProps {
    userName: string;
    userPhoto: string;
    userEspec: string;
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
export const corpoProps = {
    userName: 'Heitor teste',
    userPhoto: "https://kronus.kebook.com.br/assets/8898e345-c657-4704-be94-a853cca535b5.png",
    userEspec: "Dev",
    skills: [{
        id: 1,
        colorSkill: "#00000000",
        title: "Javascript",
        description: "meu carro chefe, a quem eu recorro pra resolver qualquer problema",
        image: "https://kronus.kebook.com.br/assets/6e81e244-364d-4597-98b9-71b3dc8cc881.png",
        percent: "1/10",
    },
    {
        id: 2,
        colorSkill: "#00000000",
        title: "VueJS",
        description: "tenho grande carinho, depois que conheci aumentou meu siviço em 80%",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
        percent: "0/10",
    },
    {
        id: 3,
        colorSkill: "#00000000",
        title: "Html5",
        description: "ainda peco muito na estrutura mas tamo aprendendo",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
        percent: "0/10",
    },
    {
        id: 4,
        colorSkill: "#00000000",
        title: "CSS",
        description: "não sei alinhar div esse site é uma prova disso, só gambi",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
        percent: "0/10",
    },
    {
        id: 5,
        colorSkill: "#00000000",
        title: "Tailwind",
        description: "não aprendi nem a caminhar e já to andando de bicicleta, tailwind é foda",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
        percent: "0/10",
    },
    {
        id: 6,
        colorSkill: "#00000000",
        title: "Bootstrap",
        description: "tive que aprender, amo d-none",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
        percent: "0/10",
    },
    {
        id: 7,
        colorSkill: "#00000000",
        title: "React",
        description: "eca",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
        percent: "0/10",
    },
    {
        id: 8,
        colorSkill: "#00000000",
        title: "Svelte",
        description: "menção honrosa por conta do henry",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
        percent: "0/10",
    },
    {
        id: 9,
        colorSkill: "#00000000",
        title: "Elden Ring",
        description: "zerei mais de 3x, ta platinado, o pai é bom",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
        percent: "10/10",
    },
    {
        id: 10,
        colorSkill: "#00000000",
        title: "Sekiro",
        description: "é difícil, to gostando",
        image: "https://kronus.kebook.com.br/assets/2e3e1383-b62b-4e1c-a6f8-199f225921f6.png",
        percent: "10/10",
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
} as CorpoProps;