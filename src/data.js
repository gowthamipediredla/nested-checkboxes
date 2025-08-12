export const nestedCheckboxData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 11, label: "Apple" },
      { id: 12, label: "Banana" },
      {
        id: 13,
        label: "Citrus",
        children: [
          { id: 131, label: "Orange" },
          { id: 132, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Vegetables",
    children: [
      { id: 21, label: "Carrot" },
      { id: 22, label: "Broccoli" },
      {
        id: 23,
        label: "Leafy Greens",
        children: [
          { id: 231, label: "Spinach" },
          { id: 232, label: "Kale" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Grains",
    children: [
      { id: 31, label: "Rice" },
      { id: 32, label: "Wheat" },
    ],
  },
];
