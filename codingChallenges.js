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

// Coding Challenge 2

// Question 1

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// Question 2
let average = 0;
const odds = Object.values(game.odds);

for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

// Question 3

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory for ${game[team]}`;
  
  console.log(`Odd of ${teamStr}: ${odd}`);
}
**/

//////////////////////////////////////////////
// Coding Challenge 3
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// Question 1
console.log(gameEvents);

const events = new Set([...gameEvents.values()]);
console.log(events);
