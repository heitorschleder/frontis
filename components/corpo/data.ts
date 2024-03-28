export interface CorpoProps {
    userName: string;
    userPhoto: string;
    userEspec: string;
    projects: Projects[];
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