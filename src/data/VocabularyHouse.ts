// src/data/vocabularyHouse.ts

export interface FlashcardWord {
    category: string;
    german: string;
    translation: string;
    use?: string;
    imageUrl?: string;
  }
  
  export const vocabularyHouse: FlashcardWord[] = [
    {
      category: "House",
      german: "das Haus",
      translation: "the house",
      use: "Ich wohne in einem großen Haus. (I live in a big house.)",
      imageUrl: "/imagesH/dasHaus.png",
    },
    {
      category: "House",
      german: "das Zimmer",
      translation: "the room",
      use: "Mein Zimmer ist hell. (My room is bright.)",
      imageUrl: "🛏️",
    },
    {
      category: "House",
      german: "die Küche",
      translation: "the kitchen",
      use: "Die Küche ist sauber. (The kitchen is clean.)",
      imageUrl: "🍳",
    },
    {
      category: "House",
      german: "das Badezimmer",
      translation: "the bathroom",
      use: "Das Badezimmer ist klein. (The bathroom is small.)",
      imageUrl: "🛁",
    },
    {
      category: "House",
      german: "das Wohnzimmer",
      translation: "the living room",
      use: "Wir sitzen im Wohnzimmer. (We sit in the living room.)",
      imageUrl: "🛋️",
    },
    {
      category: "House",
      german: "die Tür",
      translation: "the door",
      use: "Die Tür ist offen. (The door is open.)",
      imageUrl: "🚪",
    },
    {
      category: "House",
      german: "das Fenster",
      translation: "the window",
      use: "Das Fenster ist zu. (The window is closed.)",
      imageUrl: "🪟",
    },
    {
      category: "House",
      german: "der Tisch",
      translation: "the table",
      use: "Der Tisch ist im Esszimmer. (The table is in the dining room.)",
      imageUrl: "🍽️",
    },
    {
      category: "House",
      german: "der Stuhl",
      translation: "the chair",
      use: "Ich brauche einen Stuhl. (I need a chair.)",
      imageUrl: "🪑",
    },
    {
      category: "House",
      german: "das Bett",
      translation: "the bed",
      use: "Mein Bett ist bequem. (My bed is comfortable.)",
      imageUrl: "🛏️",
    },
  ];
  