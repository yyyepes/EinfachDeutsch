// src/data/QuestionsData.ts

export interface Question {
    question: string;
    options: string[];
    answer: number; // El índice de la opción correcta (0, 1, 2, 3)
  }
  
  export const questions: Question[] = [
    {
      question: "Wie heißt du? (What’s your name?)",
      options: [
        "Ich bin Lehrer.",       // A
        "Ich komme aus Mexiko.", // B
        "Ich heiße Lukas.",      // C (correcta)
        "Ich wohne in Berlin.",  // D
      ],
      answer: 2, // Respuesta correcta: "Ich heiße Lukas."
    },
    // Agrega más preguntas aquí
    {
      question: "Wo wohnst du? (Where do you live?)",
      options: [
        "Ich wohne in Berlin.",
        "Ich bin Arzt.",
        "Ich komme aus Spanien.",
        "Ich heiße Maria.",
      ],
      answer: 0,
    },
    {
      question: "Was bist du von Beruf? (What is your profession?)",
      options: [
        "Ich komme aus Frankreich.",
        "Ich bin Studentin.",
        "Ich heiße Paul.",
        "Ich wohne in München.",
      ],
      answer: 1,
    },
    {
      question: "Woher kommst du? (Where are you from?)",
      options: [
        "Ich wohne in Hamburg.",
        "Ich bin Lehrerin.",
        "Ich komme aus Kolumbien.",
        "Ich heiße Sandra.",
      ],
      answer: 2,
    },
  ];
  