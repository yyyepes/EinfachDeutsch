// src/data/vocabularyFood.ts

export interface FlashcardWord {
    category: string;
    german: string;
    translation: string;
    use?: string;
    imageUrl?: string;
  }
  // src/data/VocabularyFood.ts

// src/data/vocabularyFood.ts

export interface FlashcardWord {
  category: string;
  german: string;
  translation: string;
  use?: string;
  imageUrl?: string;
}

export const vocabularyFood = [
  {
    category: "Food",
    german: "der Apfel",
    translation: "apple",
    imageUrl: "/imagesF/apfel.png",
    use: "Ich esse gern einen Apfel. (I like to eat an apple.)"
  },
  {
    category: "Food",
    german: "das Brot",
    translation: "bread",
    imageUrl: "/imagesF/brot.png",
    use: "Zum Frühstück esse ich Brot. (I eat bread for breakfast.)"
  },
  {
    category: "Food",
    german: "die Milch",
    translation: "milk",
    imageUrl: "/imagesF/milch.png",
    use: "Milch ist gesund. (Milk is healthy.)"
  },
  {
    category: "Food",
    german: "der Käse",
    translation: "cheese",
    imageUrl: "/imagesF/kaese.png",
    use: "Ich mag Käse auf Pizza. (I like cheese on pizza.)"
  },
  {
    category: "Food",
    german: "das Ei",
    translation: "egg",
    imageUrl: "/imagesF/ei.png",
    use: "Ich koche ein Ei. (I cook an egg.)"
  },
  {
    category: "Food",
    german: "die Tomate",
    translation: "tomato",
    imageUrl: "/imagesF/tomate.png",
    use: "Die Tomate ist rot. (The tomato is red.)"
  },
  {
    category: "Food",
    german: "die Banane",
    translation: "banana",
    imageUrl: "/imagesF/banane.png",
    use: "Affe isst eine Banane. (Monkey eats a banana.)"
  },
  {
    category: "Food",
    german: "die Suppe",
    translation: "soup",
    imageUrl: "/imagesF/suppe.png",
    use: "Ich esse Suppe zum Mittagessen. (I eat soup for lunch.)"
  },
  {
    category: "Food",
    german: "das Wasser",
    translation: "water",
    imageUrl: "/imagesF/wasser.png",
    use: "Trinkst du Wasser? (Do you drink water?)"
  },
  {
    category: "Food",
    german: "das Fleisch",
    translation: "meat",
    imageUrl: "/imagesF/fleisch.png",
    use: "Fleisch ist teuer. (Meat is expensive.)"
  },
];
