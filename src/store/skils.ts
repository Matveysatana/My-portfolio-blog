import {ISkills} from 'types/skils-type'


export const skills:ISkills[] = [
    {
        name: "HTML",
        description: "Разметка для создания веб-страниц.",
        percentage: 70,
        image: 'assets/images/svg/html5.svg', // todo - этот путь можно не передавать, за картинку отвечает ImageDefiner который возвращает компонент в зависимости от переданного имени
        id: 1
    },
    {
        name: "CSS",
        description: "Стилизация и оформление сайтов.",
        percentage: 70,
        image: 'assets/images/svg/css3.svg',
        id: 2
    },
    {
        name: "JavaScript",
        description: "Язык программирования для динамики.",
        percentage: 50,
        image:  'assets/images/svg/javascript.svg',
        id: 3
    },
    {
        name: "React",
        description: "Библиотека для создания UI.",
        percentage: 30,
        image:  'assets/images/svg/react.svg',
        id: 4
    },
    {
        name: "TypeScript",
        description: "Строго типизированное надмножество JavaScript.",
        percentage: 65,
        image:  'assets/images/svg/typescript.svg',
        id: 5
    },
    {
        name: "PHP",
        description: "Серверный язык для создания веб-приложений.",
        percentage: 15,
        image: 'assets/images/svg/php.svg',
        id: 6
    },
    {
        name: "Angular",
        description: "Фреймворк для создания одностраничных приложений.",
        percentage: 10,
        image:  'assets/images/svg/angular.svg',
        id: 7
    },
    {
        name: "jQuery",
        description: "Библиотека JavaScript для упрощения работы с DOM.",
        percentage: 40,
        image: 'assets/images/svg/jquery.svg',
        id: 8
    }
];
