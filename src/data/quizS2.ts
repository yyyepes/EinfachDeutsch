// src/data/QuestionsDataS2.ts

export interface Question {
    question: string;
    options: string[];
    answer: number;
  }
  
  export const quizQuestions  = [
    {
      question: "Wie viele Buchstaben hat das deutsche Alphabet? (How many letters does the German alphabet have?)",
      options: [
        "24",
        "25",
        "26", // correcta
        "27",
      ],
      answer: 2,
    },
    {
      question: "Wie buchstabiert man 'Berlin'? (How do you spell 'Berlin'?)",
      options: [
        "B-E-R-L-I-N", // correcta
        "B-E-R-N-L-I",
        "B-E-L-R-I-N",
        "B-E-R-L-N-I",
      ],
      answer: 0,
    },
    {
      question: "Was ist ein Umlaut? (What is an umlaut?)",
      options: [
        "A special verb ending",
        "A letter with two dots above", // correcta
        "A German number",
        "A possessive pronoun",
      ],
      answer: 1,
    },
    {
      question: "Was ist die richtige Reihenfolge? (Which is the correct order?)",
      options: [
        "eins, drei, zwei, vier",
        "eins, zwei, drei, vier", // correcta
        "zwei, eins, vier, drei",
        "vier, drei, zwei, eins",
      ],
      answer: 1,
    },
    {
      question: "Wie sagt man '10' auf Deutsch? (How do you say '10' in German?)",
      options: [
        "elf",
        "zehn", // correcta
        "zwanzig",
        "eins",
      ],
      answer: 1,
    },
    {
      question: "Was ist das Personalpronomen für 'we'? (What is the personal pronoun for 'we'?)",
      options: [
        "ihr",
        "sie",
        "wir", // correcta
        "du",
      ],
      answer: 2,
    },
    {
      question: "Wähle die korrekte Konjugation: Ich ____ Deutsch. (Choose the correct conjugation: I ____ German.)",
      options: [
        "lernst",
        "lerne", // correcta
        "lernt",
        "lernst du",
      ],
      answer: 1,
    },
    {
      question: "Wie heißt das scharfe S auf Deutsch? (What is the sharp S called in German?)",
      options: [
        "Oszett",
        "Eszett", // correcta
        "Essz",
        "Doppelt S",
      ],
      answer: 1,
    },
    {
      question: "Was passt? Er ____ in Berlin. (What fits? He ____ in Berlin.)",
      options: [
        "wohne",
        "wohnen",
        "wohnt", // correcta
        "wohnst",
      ],
      answer: 2,
    },
    {
        question: "Was ist die korrekte Reihenfolge der Zahlen? (What is the correct order of the numbers?)",
        options: [
          "drei, vier, fünf, sechs", // correcta
          "vier, fünf, sechs, drei",
          "sechs, fünf, vier, drei",
          "fünf, sechs, drei, vier",
        ],
        answer: 0,
      },
      {
        question: "Wie sagt man 'I am' auf Deutsch? (How do you say 'I am' in German?)",
        options: [
          "ich ist",
          "ich sind",
          "ich bin", // correcta
          "ich bist",
        ],
        answer: 2,
      },
      {
        question: "Wie heißt die Zahl 12 auf Deutsch? (What is the number 12 in German?)",
        options: [
          "zwölf", // correcta
          "zehn",
          "zwanzig",
          "sechs",
        ],
        answer: 0,
      },
      {
        question: "Was ist das Personalpronomen für 'they'? (What is the personal pronoun for 'they'?)",
        options: [
          "ihr",
          "sie", // correcta
          "wir",
          "du",
        ],
        answer: 1,
      },
      {
        question: "Wähle das richtige Verb: Wir ____ Deutsch. (Choose the right verb: We ____ German.)",
        options: [
          "lernst",
          "lernt",
          "lerne",
          "lernen", // correcta
        ],
        answer: 3,
      },
      
  ];
  