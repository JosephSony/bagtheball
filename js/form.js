class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("Bag The Ball");
        this.title.position(430, 5);
        this.title.style('font-size', '70px');
        this.title.style('color', 'White');
        this.title.style('font-family', 'Lucida Handwriting');

        this.input.position(470,300);
        this.input.style('width', '400px');
        this.input.style('height', '50px');
        this.input.style('font-family', 'Georgia');
        this.input.style('background', 'white');
        this.input.style('border', '2px solid black');
        this.input.style('border-radius', '5px');
        this.input.style('text-align', 'center');
        this.input.style('font-size', '40px');


        this.button.position(575,400);
        this.button.style('width', '200px');
        this.button.style('height', '50px');
        this.button.style('background', 'rgb(255,171,25)');
        this.button.style('border', '5px solid white');
        this.button.style('border-radius', '5px');
        this.button.style('font-family', '"Helvetica Neue", Helvetica, Arial, sans-serif');
        this.button.style('font-size', '20px');

        this.reset.position(1000, 560);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'White');
        this.reset.style('border', '2px solid white');
        this.reset.style('border-radius', '5px');
        this.reset.style('font-family', '"Helvetica Neue", Helvetica, Arial, sans-serif');
        this.reset.style('font-size', '20px');

        // if(gameState==2){
        // this.reset.position(500, 300);
        // this.reset.style('width', '100px');
        // this.reset.style('height', '30px');
        // }

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name+ ", Please wait for the Other player to join")
            this.greeting.position(400,250);
            this.greeting.style('color', 'black');
            this.greeting.style('font-size', '30px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            window.location.reload();


            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

            
        });

    }
}