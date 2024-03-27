"use strict";

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
//  Coding Challenge 1
/* 

// Question 1
console.log("QUESTION 1 ---------------------------------------");
const [players1, players2] = game.players;
console.log(players1, players2);
console.log(" -----------------------------------------");

// Question 2
console.log("QUESTION 2---------------------------------------");
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);
console.log(" -----------------------------------------");

// Question 3
console.log("QUESTION 3---------------------------------------");
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
console.log(" -----------------------------------------");

// Question 4
console.log("QUESTION 4---------------------------------------");
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
console.log(" -----------------------------------------");

// Question 5
console.log("QUESTION 5---------------------------------------");

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

console.log(" -----------------------------------------");

// Question 6
console.log("QUESTION 6---------------------------------------");
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};

printGoals("Davies", "Muller", "Kimmich");
printGoals(...game.scored);

console.log(" -----------------------------------------");

// Question 7
console.log("QUESTION 7---------------------------------------");

team1 < team2 && console.log("Team 1 is more likely to win");
team2 < team1 && console.log("Team 1 is more likely to win");
console.log(" -----------------------------------------");
**/

// Coding Challenge 2

// Question 1

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// Question 2
let total = 0;
for (const [key, value] of Object.entries(game.odds)) {
  total += value;
}

const average = total / Object.values(game.odds).length;
console.log("Total:", total, "Average:", average);
