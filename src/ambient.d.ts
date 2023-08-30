interface Subtask {
  title: string;
  done: boolean;
}

interface Card {
  title: string;
  description: string;
  subtasks: Subtask[];
}

interface Column {
  title: string;
  cards: Card[];
}

interface Board {
  title: string;
  columns: Column[];
  selected: boolean;
}