// Part 1 of Task 7
// const basket = ["apple", "apple", "orange", "orange"];

// const price = {
//   apple: 12,
//   orange: 32,
// };
// const total = basket.reduce((acc, item) => {
//   return acc + price[item];
// }, 0);

// console.log(total);

// Part 2 of Task 7
// const basket = [
//     "apple",
//     "pen",
//     "peach",
//     "apple",
//     "pen",
//     "peach",
//     "notebook",
//     "notebook",
//     "orange",
//   ];

//   const price = {
//     apple: 12,
//     orange: 32,
//     pen: 22,
//     notebook: 89,
//     peach: 18,
//   };

//   const total = basket.reduce((acc, item) => {
//     return acc + price[item];
//   }, 0);

//   console.log(total);

//Part 3 of Task 7
const basket = [
  "apple",
  "apple",
  "orange",
  "apple",
  "orange",
  "orange",
  "apple",
  "apple",
];

const price = {
  apple: 12,
  orange: 32,
  pen: 22,
  notebook: 89,
  peach: 18,
};

const itemCount = basket.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

const total = Object.keys(itemCount).reduce((acc, item) => {
  let count = itemCount[item];
  if (item === "apple") {
    const freeApples = Math.floor(count / 2);
    count -= freeApples;
  } else if (item === "orange") {
    const freeOranges = Math.floor(count / 3);
    count -= freeOranges;
  }

  return acc + count * price[item];
}, 0);

console.log(total);
