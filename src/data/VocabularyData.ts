// Ruta: src/data/VocabularyData.ts
//este es VocabularyData.ts
// Datos de vocabulario para las flashcards de la sección "Self-introduction / Countries / Occupations"
export interface FlashcardWord {
  german: string
  translation: string
  category: string
  use: string // Ejemplo: Wie geht's? – Danke, gut. (How are you? – Fine, thanks.)
}

export const vocabularyWords: FlashcardWord[] = [
  // Saludos
  {
    german: "Hallo",
    translation: "Hello",
    use: "Hallo, wie geht's? (Hello, how are you?)",
    category: "GREETINGS",
  },
  {
    german: "Guten Tag",
    translation: "Good day",
    use: "Guten Tag, Herr Müller. (Good day, Mr. Müller.)",
    category: "GREETINGS",
  },
  {
    german: "Guten Morgen",
    translation: "Good morning",
    use: "Guten Morgen, Anna! (Good morning, Anna!)",
    category: "GREETINGS",
  },
  {
    german: "Guten Abend",
    translation: "Good evening",
    use: "Guten Abend, meine Damen und Herren. (Good evening, ladies and gentlemen.)",
    category: "GREETINGS",
  },
  {
    german: "Tschüss",
    translation: "Bye",
    use: "Tschüss! Bis morgen! (Bye! See you tomorrow!)",
    category: "GREETINGS",
  },

  // Nombres e introducciones
  {
    german: "Ich heiße...",
    translation: "My name is...",
    use: "Ich heiße Lina. (My name is Lina.)",
    category: "NAME",
  },
  {
    german: "Wie heißt du?",
    translation: "What is your name?",
    use: "Wie heißt du? Ich heiße Marco. (What is your name? My name is Marco.)",
    category: "NAME",
  },
  {
    german: "Wie ist dein Name?",
    translation: "What is your name?",
    use: "Wie ist dein Name? Mein Name ist Anna. (What is your name? My name is Anna.)",
    category: "NAME",
  },
  {
    german: "Freut mich",
    translation: "Nice to meet you", 
    use: "Hallo, ich bin Julia. – Freut mich! (Hello, I am Julia. – Nice to meet you!)",
    category: "NAME",
  },

  // Países
  {
    german: "Ich komme aus...",
    translation: "I come from...",
    use: "Ich komme aus Kolumbien. (I come from Colombia.)",
    category: "COUNTRY",
  },
  {
    german: "Woher kommst du?",
    translation: "Where do you come from?",
    use: "Woher kommst du? – Ich komme aus Spanien. (Where do you come from? – I come from Spain.)",
    category: "COUNTRY",
  },
  {
    german: "Deutschland",
    translation: "Germany",
    use: "Ich lebe in Deutschland. (I live in Germany.)",
    category: "COUNTRY",
  },
  {
    german: "Spanien",
    translation: "Spain",
    use: "Meine Freundin kommt aus Spanien. (My friend comes from Spain.)",
    category: "COUNTRY",
  },
  {
    german: "USA",
    translation: "USA",
    use: "Er reist oft in die USA. (He often travels to the USA.)",
    category: "COUNTRY",
  },
  {
    german: "England",
    translation: "England",
    use: "London liegt in England. (London is in England.)",
    category: "COUNTRY",
  },
  {
    german: "Frankreich",
    translation: "France",
    use: "Ich möchte Frankreich besuchen. (I would like to visit France.)",
    category: "COUNTRY",
  },
  {
    german: "Italien",
    translation: "Italy",
    use: "Italien ist sehr schön. (Italy is very beautiful.)",
    category: "COUNTRY",
  },

  // Ocupaciones
  {
    german: "Ich bin... von Beruf",
    translation: "I am... by profession",
    use: "Ich bin Ingenieur von Beruf. (I am an engineer by profession.)",
    category: "OCCUPATION",
  },
  {
    german: "Was bist du von Beruf?",
    translation: "What is your profession?",
    use: "Was bist du von Beruf? – Ich bin Lehrerin. (What is your profession? – I am a teacher.)",
    category: "OCCUPATION",
  },
  {
    german: "Lehrer / Lehrerin",
    translation: "Teacher (m/f)",
    use: "Mein Vater ist Lehrer. (My father is a teacher.)",
    category: "OCCUPATION",
  },
  {
    german: "Arzt / Ärztin",
    translation: "Doctor (m/f)",
    use: "Meine Mutter ist Ärztin. (My mother is a doctor.)",
    category: "OCCUPATION",
  },
  {
    german: "Ingenieur / Ingenieurin",
    translation: "Engineer (m/f)",
    use: "Ich möchte Ingenieur werden. (I want to become an engineer.)",
    category: "OCCUPATION",
  },
  {
    german: "Student / Studentin",
    translation: "Student (m/f)",
    use: "Sie ist Studentin an der Universität. (She is a student at the university.)",
    category: "OCCUPATION",
  },

  // Frases útiles
  {
    german: "Und du?",
    translation: "And you?",
    use: "Ich komme aus Mexiko. Und du? (I come from Mexico. And you?)",
    category: "PHRASES",
  },
  {
    german: "Wie geht es dir?",
    translation: "How are you?",
    use: "Hallo Paul, wie geht es dir? (Hello Paul, how are you?)",
    category: "PHRASES",
  },
  {
    german: "Danke, gut",
    translation: "Fine, thanks",
    use: "Wie geht's? – Danke, gut. (How are you? – Fine, thanks.)",
    category: "PHRASES",
  },
]
