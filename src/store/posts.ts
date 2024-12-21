import { PostType } from "../types/post-type"



// Данные карточек
export const blogPosts:PostType[] = [
    // Программирование
    { 
      title: "Как начать изучать программирование", 
      description: "Пошаговый план для начинающих разработчиков.",
      image: "programming1.jpg",
      link: "#",
      createdAt: "2024-12-01 10:00",
      category: "Программирование"
    },
    { 
      title: "Лучшие фреймворки для разработки в 2024 году", 
      description: "Обзор популярных инструментов: React, Angular, Vue.",
      image: "programming2.jpg",
      link: "#",
      createdAt: "2024-11-30 12:15",
      category: "Программирование"
    },
    {
      title: "Что выбрать: TypeScript или JavaScript?", 
      description: "Сравнение двух языков для разработки.",
      image: "programming3.jpg",
      link: "#",
      createdAt: "2024-11-28 14:45",
      category: "Программирование"
    },
  
    // Музыка
    { 
      title: "10 лучших инструментов для начинающих музыкантов", 
      description: "Как выбрать инструмент для своего первого занятия?",
      image: "music1.jpg",
      link: "#",
      createdAt: "2024-12-02 09:30",
      category: "Музыка"
    },
    { 
      title: "Как научиться играть на гитаре за месяц", 
      description: "Полезные советы и упражнения для новичков.",
      image: "music2.jpg",
      link: "#",
      createdAt: "2024-12-05 11:20",
      category: "Музыка"
    },
    {
      title: "Лучшие программы для создания электронной музыки", 
      description: "Сравнение FL Studio, Ableton и Logic Pro.",
      image: "music3.jpg",
      link: "#",
      createdAt: "2024-11-27 15:00",
      category: "Музыка"
    },
  
    // Спорт
    { 
      title: "Польза утренних пробежек", 
      description: "Как бег помогает оставаться здоровым и энергичным?",
      image: "sports1.jpg",
      link: "#",
      createdAt: "2024-12-03 07:00",
      category: "Спорт"
    },
    { 
      title: "Лучшие упражнения для новичков в тренажерном зале", 
      description: "Простой план для тех, кто только начинает.",
      image: "sports2.jpg",
      link: "#",
      createdAt: "2024-12-04 19:45",
      category: "Спорт"
    },
    {
      title: "Что лучше: футбол или баскетбол?", 
      description: "Сравниваем два самых популярных вида спорта.",
      image: "sports3.jpg",
      link: "#",
      createdAt: "2024-11-26 10:30",
      category: "Спорт"
    },
  
    // Бизнес
    { 
      title: "Как начать свой бизнес с нуля", 
      description: "Советы для начинающих предпринимателей.",
      image: "business1.jpg",
      link: "#",
      createdAt: "2024-12-06 08:20",
      category: "Бизнес"
    },
    { 
      title: "10 ошибок, которых следует избегать в бизнесе", 
      description: "Рекомендации для успешного старта.",
      image: "business2.jpg",
      link: "#",
      createdAt: "2024-11-25 16:10",
      category: "Бизнес"
    },
    {
      title: "Книги, которые должен прочитать каждый предприниматель", 
      description: "Топ-5 книг для бизнеса и мотивации.",
      image: "business3.jpg",
      link: "#",
      createdAt: "2024-11-24 09:00",
      category: "Бизнес"
    },
  
    // Книги
    {
        title: "Топ-5 книг, которые стоит прочитать каждому",
        description: "От классики до современной литературы — выбор для всех.",
        image: "books1.jpg",
        link: "#",
        createdAt: "2024-12-07 13:00",
        category: "Книги"
      },
      {
        title: "Как читать быстрее и эффективнее",
        description: "Методы скорочтения для студентов и профессионалов.",
        image: "books2.jpg",
        link: "#",
        createdAt: "2024-11-29 18:30",
        category: "Книги"
      },
      {
        title: "Лучшие книги по саморазвитию",
        description: "10 изданий, которые изменят ваш взгляд на жизнь.",
        image: "books3.jpg",
        link: "#",
        createdAt: "2024-12-05 16:45",
        category: "Книги"
      },
    // Английский язык
    {
        title: "5 советов для изучения английского языка",
        description: "Как быстро выучить язык с минимальными усилиями.",
        image: "english1.jpg",
        link: "#",
        createdAt: "2024-12-02 08:20",
        category: "Английский язык"
      },
      {
        title: "Лучшие приложения для изучения английского",
        description: "Duolingo, LinguaLeo и другие популярные сервисы.",
        image: "english2.jpg",
        link: "#",
        createdAt: "2024-11-28 19:15",
        category: "Английский язык"
      },
      {
        title: "Топ-10 фильмов для изучения английского",
        description: "Как совмещать просмотр кино с практикой языка.",
        image: "english3.jpg",
        link: "#",
        createdAt: "2024-11-25 20:00",
        category: "Английский язык"
      },
    // Инвестици
    {
        title: "С чего начать инвестировать",
        description: "Первые шаги для новичков на фондовом рынке.",
        image: "investments1.jpg",
        link: "#",
        createdAt: "2024-12-01 14:10",
        category: "Инвестиции"
      },
      {
        title: "Топ-5 ошибок начинающих инвесторов",
        description: "Как избежать потерь и заработать больше.",
        image: "investments2.jpg",
        link: "#",
        createdAt: "2024-12-06 17:30",
        category: "Инвестиции"
      },
      {
        title: "Как создать диверсифицированный портфель",
        description: "Основы распределения активов для стабильного дохода.",
        image: "investments3.jpg",
        link: "#",
        createdAt: "2024-11-30 10:00",
        category: "Инвестиции"
      },
    // Рисование
    {
        title: "Основы рисунка для начинающих",
        description: "Первый шаг в мир искусства — материалы и техники.",
        image: "drawing1.jpg",
        link: "#",
        createdAt: "2024-12-04 15:00",
        category: "Рисование"
      },
      {
        title: "Как выбрать идеальный набор для рисования",
        description: "Советы по выбору красок, кистей и бумаги.",
        image: "drawing2.jpg",
        link: "#",
        createdAt: "2024-11-26 09:45",
        category: "Рисование"
      },
      {
        title: "10 идей для рисунков акварелью",
        description: "Инспирация для творчества и развития навыков.",
        image: "drawing3.jpg",
        link: "#",
        createdAt: "2024-12-08 11:20",
        category: "Рисование"
      },
    // Волейбол
    {
        title: "Основные правила волейбола для начинающих",
        description: "Что нужно знать, чтобы начать играть.",
        image: "volleyball1.jpg",
        link: "#",
        createdAt: "2024-12-09 10:00",
        category: "Волейбол"
      },
      {
        title: "Лучшие упражнения для улучшения игры в волейбол",
        description: "Тренировки для скорости, силы и точности.",
        image: "volleyball2.jpg",
        link: "#",
        createdAt: "2024-12-03 12:45",
        category: "Волейбол"
      },
      {
        title: "История волейбола: как всё начиналось",
        description: "Интересные факты о создании и развитии игры.",
        image: "volleyball3.jpg",
        link: "#",
        createdAt: "2024-11-27 14:30",
        category: "Волейбол"
      },
    // Обучение
    {
        title: "Как эффективно учиться: 7 простых советов",
        description: "Способы улучшить концентрацию и продуктивность.",
        image: "learning1.jpg",
        link: "#",
        createdAt: "2024-12-05 13:40",
        category: "Обучение"
      },
      {
        title: "Лучшие онлайн-платформы для самообразования",
        description: "Сравнение Coursera, Khan Academy и Udemy.",
        image: "learning2.jpg",
        link: "#",
        createdAt: "2024-11-29 16:00",
        category: "Обучение"
      },
      {
        title: "Как составить идеальный план обучения",
        description: "Пошаговый процесс для достижения целей.",
        image: "learning3.jpg",
        link: "#",
        createdAt: "2024-11-24 18:15",
        category: "Обучение"
      },

  ];
  

