// src/data/VocabularyDataS2.ts

export interface FlashcardWord {
    german: string;
    translation: string;
    category: string;
    use: string;
    imageUrl?: string; // Emoji por ahora
  }
  
  export const vocabularyWords: FlashcardWord[] = [
    // Alphabet
    {
      german: "das Alphabet",
      translation: "Alphabet",
      category: "ALPHABET",
      use: "Das deutsche Alphabet hat 26 Buchstaben. (The German alphabet has 26 letters.)",
      imageUrl: "",
    },
    {
      german: "Buchstabe",
      translation: "Letter (of the alphabet)",
      category: "ALPHABET",
      use: "Wie buchstabiert man das? (How do you spell that?)",
      imageUrl: "",
    },
    {
      german: "Umlaut",
      translation: "Umlaut (Ä, Ö, Ü)",
      category: "ALPHABET",
      use: "Ä, Ö, Ü sind Umlaute im Deutschen. (Ä, Ö, Ü are umlauts in German.)",
      imageUrl: "",
    },
    {
      german: "ß (Eszett)",
      translation: "Sharp S (ß)",
      category: "ALPHABET",
      use: "Straße hat ein Eszett. (Straße has an Eszett.)",
      imageUrl: "ß",
    },
    // Números 1–5
    {
      german: "eins",
      translation: "One",
      category: "NUMBERS",
      use: "Ich habe eins. (I have one.)",
      imageUrl: "",
    },
    {
      german: "zwei",
      translation: "Two",
      category: "NUMBERS",
      use: "Zwei Katzen. (Two cats.)",
      imageUrl: "",
    },
    {
      german: "drei",
      translation: "Three",
      category: "NUMBERS",
      use: "Drei Bücher. (Three books.)",
      imageUrl: "",
    },
    {
      german: "zehn",
      translation: "Ten",
      category: "NUMBERS",
      use: "Ich bin zehn Jahre alt. (I am ten years old.)",
      imageUrl: "",
    },
    // Saludos útiles y frases
    {
      german: "Wie buchstabiert man ...?",
      translation: "How do you spell ...?",
      category: "PHRASE",
      use: "Wie buchstabiert man „Berlin“? (How do you spell 'Berlin'?)",
      imageUrl: "",
    },
    {
      german: "Wie alt bist du?",
      translation: "How old are you?",
      category: "PHRASE",
      use: "Wie alt bist du? Ich bin zwölf. (How old are you? I am twelve.)",
      imageUrl: "",
    },
    // Pronombres personales
    {
      german: "ich",
      translation: "I",
      category: "PRONOUN",
      use: "Ich lerne Deutsch. (I learn German.)",
      imageUrl: "",
    },
    {
      german: "du",
      translation: "You (informal, singular)",
      category: "PRONOUN",
      use: "Du bist nett. (You are nice.)",
      imageUrl: "",
    }
  ];
  