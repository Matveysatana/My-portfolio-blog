import { PostType } from "../types/post-type"
import start_prog from 'assets/images/post-images/start_prog.jpeg'
import framework_prog from 'assets/images/post-images/framework_prog.jpeg'
import ts_or_js_prog from 'assets/images/post-images/ts_or_js_prog.jpeg'
import tools_music from 'assets/images/post-images/tools_music.jpeg'
import guitar_music from 'assets/images/post-images/guitar_music.jpeg'
import electro_music from 'assets/images/post-images/electro_music.png'
import morningRun_sport from 'assets/images/post-images/morningRun_sport.png'
import zal_sport from 'assets/images/post-images/zal_sport.png'
import footBascet_sport from 'assets/images/post-images/footBascet_sport.jpeg'
import start_buisnes from 'assets/images/post-images/start_buisnes.png'
import errors_buisnes from 'assets/images/post-images/errors_buisnes.png'
import books_buisnes from 'assets/images/post-images/books_buisnes.png'
import top5_books from 'assets/images/post-images/top5_books.png'
import fastread_books from 'assets/images/post-images/fastread_books.png'
import best_books from 'assets/images/post-images/best_books.png'
import sovet_english from 'assets/images/post-images/sovet_english.png'
import app_english from 'assets/images/post-images/app_english.png'
import films_english from 'assets/images/post-images/films_english.png'
import start_invest from 'assets/images/post-images/start_invest.png'
import errors_invest from 'assets/images/post-images/errors_invest.png'
import portfol_invest from 'assets/images/post-images/portfol_invest.png'
import base_drow from 'assets/images/post-images/base_drow.png'
import tools_drow from 'assets/images/post-images/tools_drow.png'
import painting_drow from 'assets/images/post-images/painting_drow.png'
import rules_voley from 'assets/images/post-images/rules_voley.png'
import train_voley from 'assets/images/post-images/train_voley.png'
import history_voley from 'assets/images/post-images/history_voley.png'
import sovet_edu from 'assets/images/post-images/sovet_edu.png'
import bestWebsite_edu from 'assets/images/post-images/bestWebsite_edu.png'
import plan_edu from 'assets/images/post-images/plan_edu.png'


export const blogPosts: PostType[] = [
  // Программирование
  {
    title: "Как начать изучать программирование",
    description: "Пошаговый план для начинающих разработчиков.",
    src: start_prog,
    id: "1",
    createdAt: "2024-12-01 10:00",
    category: "Программирование"
  },
  {
    title: "Лучшие фреймворки для разработки в 2024 году",
    description: "Обзор популярных инструментов: React, Angular, Vue.",
    src: framework_prog,
    id: "2",
    createdAt: "2024-11-30 12:15",
    category: "Программирование"
  },
  {
    title: "Что выбрать: TypeScript или JavaScript?",
    description: "Сравнение двух языков для разработки.",
    src: ts_or_js_prog,
    id: "3",
    createdAt: "2024-11-28 14:45",
    category: "Программирование"
  },

  // Музыка
  {
    title: "10 лучших инструментов для начинающих музыкантов",
    description: "Как выбрать инструмент для своего первого занятия?",
    src: tools_music,
    id: "4",
    createdAt: "2024-12-02 09:30",
    category: "Музыка"
  },
  {
    title: "Как научиться играть на гитаре за месяц",
    description: "Полезные советы и упражнения для новичков.",
    src: guitar_music,
    id: "5",
    createdAt: "2024-12-05 11:20",
    category: "Музыка"
  },
  {
    title: "Лучшие программы для создания электронной музыки",
    description: "Сравнение FL Studio, Ableton и Logic Pro.",
    src: electro_music,
    id: "6",
    createdAt: "2024-11-27 15:00",
    category: "Музыка"
  },

  // Спорт
  {
    title: "Польза утренних пробежек",
    description: "Как бег помогает оставаться здоровым и энергичным?",
    src: morningRun_sport,
    id: "7",
    createdAt: "2024-12-03 07:00",
    category: "Спорт"
  },
  {
    title: "Лучшие упражнения для новичков в тренажерном зале",
    description: "Простой план для тех, кто только начинает.",
    src: zal_sport,
    id: "8",
    createdAt: "2024-12-04 19:45",
    category: "Спорт"
  },
  {
    title: "Что лучше: футбол или баскетбол?",
    description: "Сравниваем два самых популярных вида спорта.",
    src: footBascet_sport,
    id: "9",
    createdAt: "2024-11-26 10:30",
    category: "Спорт"
  },

  // Бизнес
  {
    title: "Как начать свой бизнес с нуля",
    description: "Советы для начинающих предпринимателей.",
    src: start_buisnes,
    id: "10",
    createdAt: "2024-12-06 08:20",
    category: "Бизнес"
  },
  {
    title: "10 ошибок, которых следует избегать в бизнесе",
    description: "Рекомендации для успешного старта.",
    src: errors_buisnes,
    id: "11",
    createdAt: "2024-11-25 16:10",
    category: "Бизнес"
  },
  {
    title: "Книги, которые должен прочитать каждый предприниматель",
    description: "Топ-5 книг для бизнеса и мотивации.",
    src: books_buisnes,
    id: "12",
    createdAt: "2024-11-24 09:00",
    category: "Бизнес"
  },

  // Книги
  {
    title: "Топ-5 книг, которые стоит прочитать каждому",
    description: "От классики до современной литературы — выбор для всех.",
    src: top5_books,
    id: "13",
    createdAt: "2024-12-07 13:00",
    category: "Книги"
  },
  {
    title: "Как читать быстрее и эффективнее",
    description: "Методы скорочтения для студентов и профессионалов.",
    src: fastread_books,
    id: "14",
    createdAt: "2024-11-29 18:30",
    category: "Книги"
  },
  {
    title: "Лучшие книги по саморазвитию",
    description: "10 изданий, которые изменят ваш взгляд на жизнь.",
    src: best_books,
    id: "15",
    createdAt: "2024-12-05 16:45",
    category: "Книги"
  },
  // Английский язык
  {
    title: "5 советов для изучения английского языка",
    description: "Как быстро выучить язык с минимальными усилиями.",
    src: sovet_english,
    id: "16",
    createdAt: "2024-12-02 08:20",
    category: "Английский язык"
  },
  {
    title: "Лучшие приложения для изучения английского",
    description: "Duolingo, LinguaLeo и другие популярные сервисы.",
    src: app_english,
    id: "17",
    createdAt: "2024-11-28 19:15",
    category: "Английский язык"
  },
  {
    title: "Топ-10 фильмов для изучения английского",
    description: "Как совмещать просмотр кино с практикой языка.",
    src: films_english,
    id: "18",
    createdAt: "2024-11-25 20:00",
    category: "Английский язык"
  },
  // Инвестици
  {
    title: "С чего начать инвестировать",
    description: "Первые шаги для новичков на фондовом рынке.",
    src: start_invest,
    id: "19",
    createdAt: "2024-12-01 14:10",
    category: "Инвестиции"
  },
  {
    title: "Топ-5 ошибок начинающих инвесторов",
    description: "Как избежать потерь и заработать больше.",
    src: errors_invest,
    id: "20",
    createdAt: "2024-12-06 17:30",
    category: "Инвестиции"
  },
  {
    title: "Как создать диверсифицированный портфель",
    description: "Основы распределения активов для стабильного дохода.",
    src: portfol_invest,
    id: "21",
    createdAt: "2024-11-30 10:00",
    category: "Инвестиции"
  },
  // Рисование
  {
    title: "Основы рисунка для начинающих",
    description: "Первый шаг в мир искусства — материалы и техники.",
    src: base_drow,
    id: "22",
    createdAt: "2024-12-04 15:00",
    category: "Рисование"
  },
  {
    title: "Как выбрать идеальный набор для рисования",
    description: "Советы по выбору красок, кистей и бумаги.",
    src: tools_drow,
    id: "23",
    createdAt: "2024-11-26 09:45",
    category: "Рисование"
  },
  {
    title: "10 идей для рисунков акварелью",
    description: "Инспирация для творчества и развития навыков.",
    src: painting_drow,
    id: "24",
    createdAt: "2024-12-08 11:20",
    category: "Рисование"
  },
  // Волейбол
  {
    title: "Основные правила волейбола для начинающих",
    description: "Что нужно знать, чтобы начать играть.",
    src: rules_voley,
    id: "25",
    createdAt: "2024-12-09 10:00",
    category: "Волейбол"
  },
  {
    title: "Лучшие упражнения для улучшения игры в волейбол",
    description: "Тренировки для скорости, силы и точности.",
    src: train_voley,
    id: "26",
    createdAt: "2024-12-03 12:45",
    category: "Волейбол"
  },
  {
    title: "История волейбола: как всё начиналось",
    description: "Интересные факты о создании и развитии игры.",
    src: history_voley,
    id: "27",
    createdAt: "2024-11-27 14:30",
    category: "Волейбол"
  },
  // Обучение
  {
    title: "Как эффективно учиться: 7 простых советов",
    description: "Способы улучшить концентрацию и продуктивность.",
    src: sovet_edu,
    id: "28",
    createdAt: "2024-12-05 13:40",
    category: "Обучение"
  },
  {
    title: "Лучшие онлайн-платформы для самообразования",
    description: "Сравнение Coursera, Khan Academy и Udemy.",
    src: bestWebsite_edu,
    id: "29",
    createdAt: "2024-11-29 16:00",
    category: "Обучение"
  },
  {
    title: "Как составить идеальный план обучения",
    description: "Пошаговый процесс для достижения целей.",
    src: plan_edu,
    id: "30",
    createdAt: "2024-11-24 18:15",
    category: "Обучение"
  },

];