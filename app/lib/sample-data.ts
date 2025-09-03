const cards = [
  {
    id: "c0",
    cardBody: "Do the dishes",
    status: "doing",
    date: "2025-09-03"
  },
  {
    id: "c1",
    cardBody: "Fold the laundry",
    status: "to-do",
    date: "2025-09-03"
  },
  {
    id: "c2",
    cardBody: "Submit your assignment",
    status: "done",
    date: "2025-09-03"
  },
  {
    id: "c3",
    cardBody: "Wash the car",
    status: "doing",
    date: "2025-09-02"
  },
];

const users = [
  {
    id: "u0",
    username: "username-0",
    password: "password",
    cards: [
      cards[0],
      cards[1],
      cards[2],
    ]
  },
  {
    id: "u1",
    username: "username-1",
    password: "password",
    cards: [
      cards[3],
    ]
  }
];

export { cards, users };

