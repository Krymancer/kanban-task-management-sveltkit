interface Card {
  name: string;
  description: string;
}

interface Column {
  name: string;
  cards: Card[];
}

interface Board {
  name: string;
  columns: Column[];
}