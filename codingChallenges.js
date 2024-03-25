"use strict";

//  Coding Challenge 1

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Question 1
console.log("QUESTION 1 ---------------------------------------");
console.log(game.players);

const players1 = game.players[0];
console.log("team 1:", players1);

const players2 = game.players[1];
console.log("team 2", players2);
console.log(" -----------------------------------------");

// Question 2
console.log("QUESTION 2---------------------------------------");
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);
console.log(" -----------------------------------------");

// Question 3
console.log("QUESTION 3---------------------------------------");
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);
console.log(" -----------------------------------------");
