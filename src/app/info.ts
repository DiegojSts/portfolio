// import { IInfo } from './info';
export interface IInfo {
    id: number,
    projectName: string,
    category: string,
    programmingLanguage: string,
    shortDescription: string,
    fullDescription: string,
    mainImageUrl: string,
    identifier: string,
    gif: string,
    projectUrl: string,
    projectDate: string,
    technologies_1: string,
    technologies_2: string,
    github: string,

}

export const objectInfo: IInfo[] = [{


    id: 1,
    projectName: "Big Game Survey",
    category: "Fullstack",
    programmingLanguage: "Java",
    shortDescription: "A aplicação consiste em uma pesquisa de preferência de games, onde os dados são coletados no app mobile, e depois são listados no app web, que também apresenta um dashboard com gráficos baseados nestes dados.",
    fullDescription: "Big Game Survey é uma aplicação full stack web e mobile construída durante a 1ª edição da Semana DevSuperior (#sds1), evento organizado pela DevSuperior.",
    mainImageUrl: "../../assets/img/biggame.png",
    identifier: "Java",
    gif: "../../assets/gif/BigGame.gif",
    projectUrl: "https://diegosantos.netlify.app/",
    projectDate: "07 Fev, 2021",
    technologies_1: "Spring Boot",
    technologies_2: "React",
    github: "https://github.com/DiegojSts/DevSuperior"

},
{
    id: 2,
    projectName: "Consumo de API - Geração de Conselhos",
    category: "Frontend",
    programmingLanguage: "Javascript",
    shortDescription: "Projeto da plataforma do Frontend Mentor para consumo de api pública de geração de conselhos",
    fullDescription: "O projeto consiste no consumo de uma api publica para gerar conselhos a cada nova interação",
    mainImageUrl: "",
    identifier: "CSS, HTML, JS",
    gif: "",
    projectUrl: "https://diegojsts.github.io/FrontEndMentor-Advice-API/",
    projectDate: "25 Jul, 2022",
    technologies_1: "CSS",
    technologies_2: "HTML",
    github: "https://github.com/DiegojSts/FrontEndMentor-Advice-API"

},
{
    id: 3,
    projectName: "Ecommerce",
    category: "Frontend",
    programmingLanguage: "Typescript",
    shortDescription: "Ecommerce de produtos",
    fullDescription: "Esse projeto aborda conceitos sobre manipulação de dados de ecommerce e exibição das informações de produtos, bem como a simulação de compra e visualização de carrinho de compras",
    mainImageUrl: "",
    identifier: "Angular",
    gif: "",
    projectUrl: "https://diegojsts.github.io/angular-ecommerce/produtos",
    projectDate: "21 Nov, 2022",
    technologies_1: "Angular",
    technologies_2: "Angular Material",
    github: "https://github.com/DiegojSts/angular-ecommerce"

},

{
  id: 4,
  projectName: "Avaliação Interativa",
  category: "Frontend",
  programmingLanguage: "Javascript",
  shortDescription: "Desafio da plataforma FrontendMentor ",
  fullDescription: "O desafio consiste na construção de um card interativo de rating utilizando HTML, CSS E Javascript",
  mainImageUrl: "",
  identifier: "CSS, HTML, JS",
  gif: "",
  projectUrl: "https://diegojsts.github.io/FrontEndMentor-Rating/",
  projectDate: "21 Nov, 2022",
  technologies_1: "HTML",
  technologies_2: "CSS",
  github: "https://github.com/DiegojSts/FrontEndMentor-Rating"

}]

