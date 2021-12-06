var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score = 0;
var player, form,game;
var player1,player2;
var players;
var footballs;
var ballGroup;
var footballImg;
var player1_img;
var player2_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/field.jpg");
  player1_img=loadImage("images/player1.png");
  player2_img=loadImage("images/player2.png");
  footballImg=loadImage("images/football.png");
  ballGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}