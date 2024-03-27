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
    ],
} as CorpoProps;