const cards = [
  {
    cardBody: "Do the dishes",
    status: "doing",
    dueDate: "2025-09-03"
  },
  {
    cardBody: "Fold the laundry",
    status: "to-do",
    dueDate: "2025-09-03"
  },
  {
    cardBody: "Submit your assignment",
    status: "done",
    dueDate: "2025-09-03"
  },
  {
    cardBody: "Wash the car",
    status: "doing",
    dueDate: "2025-09-02"
  },
];

const users = [
  {
    username: "username-0",
    password: "password",
    cards: [
      cards[0],
      cards[1],
      cards[2],
    ]
  },
  {
    username: "username-1",
    password: "password",
    cards: [
      cards[3],
    ]
  }
];

export { cards, users };

