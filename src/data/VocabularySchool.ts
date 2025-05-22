// src/data/vocabularySchool.ts

export interface FlashcardWord {
    category: string;
    german: string;
    translation: string;
    use?: string;
    imageUrl?: string;
  }
  // src/data/VocabularySchool.ts
export const vocabularySchool = [
    {
      category: "School",
      german: "die Schule",
      translation: "school",
      use: "Ich gehe zur Schule. (I go to school.)",
      imageUrl: "/imagesS/dasSchule.png"
    },
    {
      category: "School",
      german: "das Klassenzimmer",
      translation: "classroom",
      use: "Das Klassenzimmer ist groß. (The classroom is big.)",
      imageUrl: "🧑‍🏫"
    },
    {
      category: "School",
      german: "der Lehrer",
      translation: "teacher (male)",
      use: "Der Lehrer erklärt die Aufgabe. (The teacher explains the task.)",
      imageUrl: "👨‍🏫"
    },
    {
      category: "School",
      german: "die Lehrerin",
      translation: "teacher (female)",
      use: "Die Lehrerin ist freundlich. (The teacher is friendly.)",
      imageUrl: "👩‍🏫"
    },
    {
      category: "School",
      german: "der Schüler",
      translation: "student (male)",
      use: "Der Schüler macht seine Hausaufgaben. (The student does his homework.)",
      imageUrl: "👦"
    },
    {
      category: "School",
      german: "die Schülerin",
      translation: "student (female)",
      use: "Die Schülerin liest ein Buch. (The student reads a book.)",
      imageUrl: "👧"
    },
    {
      category: "School",
      german: "das Buch",
      translation: "book",
      use: "Das Buch ist interessant. (The book is interesting.)",
      imageUrl: "📚"
    },
    {
      category: "School",
      german: "der Bleistift",
      translation: "pencil",
      use: "Ich schreibe mit dem Bleistift. (I write with the pencil.)",
      imageUrl: "✏️"
    },
    {
      category: "School",
      german: "das Heft",
      translation: "notebook",
      use: "Ich notiere es im Heft. (I write it down in my notebook.)",
      imageUrl: "📒"
    },
    {
      category: "School",
      german: "die Tafel",
      translation: "blackboard",
      use: "Die Lehrerin schreibt an die Tafel. (The teacher writes on the blackboard.)",
      imageUrl: "🧑‍🏫"
    }
  ];
  