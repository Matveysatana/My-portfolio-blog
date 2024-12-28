

// Тип для элемента контента (параграф, подзаголовок, цитата)
export type ContentItemType = {
  type: "paragraph" | "subtitle" | "quote"; // Тип элемента
  text: string; // Текст элемента
};

// Основной тип для поста
export type PostsDetailsType = {
  id: string; // Уникальный идентификатор поста
  src: string; // Путь к изображению
  subtitle: string; // Подзаголовок статьи
  readingTime: string; // Время на прочтение статьи
  tags: string[]; // Список тегов
  content: ContentItemType[]; // Массив с контентом (параграфы, подзаголовки, цитаты)
};