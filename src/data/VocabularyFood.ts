// src/data/vocabularyFood.ts

export interface FlashcardWord {
    category: string;
    german: string;
    translation: string;
    use?: string;
    imageUrl?: string;
  }
  // src/data/VocabularyFood.ts

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
      imageUrl: "🍞",
      use: "Zum Frühstück esse ich Brot. (I eat bread for breakfast.)"
    },
    {
      category: "Food",
      german: "die Milch",
      translation: "milk",
      imageUrl: "🥛",
      use: "Milch ist gesund. (Milk is healthy.)"
    },
    {
      category: "Food",
      german: "der Käse",
      translation: "cheese",
      imageUrl: "🧀",
      use: "Ich mag Käse auf Pizza. (I like cheese on pizza.)"
    },
    {
      category: "Food",
      german: "das Ei",
      translation: "egg",
      imageUrl: "🥚",
      use: "Ich koche ein Ei. (I cook an egg.)"
    },
    {
      category: "Food",
      german: "die Tomate",
      translation: "tomato",
      imageUrl: "🍅",
      use: "Die Tomate ist rot. (The tomato is red.)"
    },
    {
      category: "Food",
      german: "die Banane",
      translation: "banana",
      imageUrl: "🍌",
      use: "Affe isst eine Banane. (Monkey eats a banana.)"
    },
    {
      category: "Food",
      german: "die Suppe",
      translation: "soup",
      imageUrl: "🍲",
      use: "Ich esse Suppe zum Mittagessen. (I eat soup for lunch.)"
    },
    {
      category: "Food",
      german: "das Wasser",
      translation: "water",
      imageUrl: "💧",
      use: "Trinkst du Wasser? (Do you drink water?)"
    },
    {
      category: "Food",
      german: "das Fleisch",
      translation: "meat",
      imageUrl: "🥩",
      use: "Fleisch ist teuer. (Meat is expensive.)"
    },
  ];
  