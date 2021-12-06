class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player1_img);
    player1.scale=0.20;
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player2_img);
    player2.scale=0.20;

    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                player.getPlayerAtEnd();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(20);
                         // add code to display the player name on the respective basket
                         text("You" ,x-15,y+50);
                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("• "+allPlayers.player1.name+"  " +allPlayers.player1.score,50,50);
                        text("• " +allPlayers.player2.name+"  " +allPlayers.player2.score, 50, 100);
                 
                 }
                
                if(player.score>=5){
                    gameState = 2; 
                    player.rank += 1;
                    Player.updatePlayerAtEnd(player.rank);
                    player.update();
                    this.showRank();
                    
                }
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     footballs = createSprite(random(100, 1000), 0, 80, 80);
                     footballs.addImage(footballImg);
                     footballs.scale=0.05;
                     footballs.velocityY = 6;
                     ballGroup.add(footballs);
                     
                     
                 }
                 
                  if (player.index !== null) {
                      for (var i = 0; i < ballGroup.length; i++) {
                          if (ballGroup.get(i).isTouching(players)) {
                              ballGroup.get(i).destroy();
                              player.score =player.score+1;
                              player.update();
                              
                          }
                          
                      }
                  }
                

         
         
        
         

    }
    showRank() {
        alert("Awesome !! You finished the game! Your score is " +  player.score)
    }

gameOver() {
    textSize(70);
    fill("white");
    textStyle(BOLD);
    text("GAME OVER",displayWidth/2-400,displayHeight/2-100);
    player.rank=0;
    player.score=0;
    }
    
    end(){
       console.log("Game Ended");
       console.log(player.rank)
       this.gameOver();
    }
 }
