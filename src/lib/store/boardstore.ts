import { writable } from "svelte/store";

const initialBoard : Board = {
  title: "My Board",
  columns: [
    {
      title: "To do",
      cards: [
        {
          title: "Do dishes",
          description: "Do the dishes before mom comes home",
          subtasks: [
            {
              title: "Wash dishes",
              done: false,
            },
            {
              title: "Dry dishes",
              done: false,
            }
          ]
        },
        {
          title: "Do homework",
          description: "Do the homework before school starts",
          subtasks: [
            {
              title: "Math",
              done: false,
            },
            {
              title: "English",
              done: false,
            },
            {
              title: "Science",
              done: false,
            },
          ]
        },
      ],
    },
    {
      title: "Doing",
      cards: [
        {
          title: "Learn Svelte",
          description: "Learn Svelte before the end of the week",
          subtasks: []
        },
      ],
    },
    {
      title: "Done",
      cards: [],
    },
  ],
  selected: true,
};

const initalValue : Board[] = [initialBoard];

export const boardStore = writable(initalValue);