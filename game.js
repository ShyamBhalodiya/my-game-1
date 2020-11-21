class Game {
    constructor() {
         this.input = null;
         this.save = null;
         this.text  = null;
         this.greeting = null;
    }
    getstate() {
        database.ref("gamestate").on("value", (data) => {
            gameState = data.val();
        });
    }
    updatestate(state) {
        database.ref("/").update({
            gamestate: state
        })
    }
    preStart() {
        clear();
        background(backGui);

        player.getcount();

        //box
        box = createSprite(displayWidth / 2 , displayHeight / 2 +100);
        box.scale = 0.3;
        box.addImage(boxImg);

        //text
        fill(0,255,0);
        this.text = createElement("h2");
        this.text.position(displayWidth / 2 + 200, displayHeight / 2);
        textFont(Font);
        this.text.html("Enter your name here");

        //input box
        this.input = createInput("Name");
        this.input.position(displayWidth / 2 + 200, displayHeight / 2 + 100);

        //save button
        this.save = createImg("Gui/buttons/normal/accept.png");
        this.save.size(50,50);
        this.save.position(displayWidth/2 + 300,displayHeight / 2 + 150);
        this.save.mousePressed(() =>{
            box.visible = false;
            this.text.hide();
            this.input.hide();
            this.save.hide();
            player.name = this.input.value();
            playercount += 1;
            player.index = playercount;
            player.updateplayer();
            player.updatecount(playercount);
            this.start();
        })
        drawSprites();
    }
    start() {
        clear();
        var form = new Form();
        form.display();
    }

}