const notification = document.querySelector('.notification');
const room = document.querySelector('.room');
const winUser = document.querySelector('.win-user');
const winOpponent = document.querySelector('.win-opponent');
const isitmyturn = document.querySelector(".isitmyturn");

var game = ["", "", "", "", "", "", "", "", ""];

var myPiece, opponentPiece, started, middle, roomId;

var turn, opponent;

var run = false, Rematch = false,  bothOnline;

var myWins = 0, opponentWins = 0, TotalGames = 0;