var database, player, box, game,input,save;

var playImg, settingImg, infoImg, backGui, boxImg, Font, acceptImg;

var allPlayers;

var playercount = 0;
var gamestate = 0;

function preload() {
    playImg = loadImage("Gui/buttons/normal/play.png");
    settingImg = loadImage("Gui/buttons/normal/settings.png");
    infoImg = loadImage("Gui/buttons/normal/profile.png");
    backGui = loadImage("Gui/background1.png");
    boxImg = loadImage("Gui/frames/paused.png");
    Font = loadFont("characters/TXT/Christopher Done.ttf");
    acceptImg = loadImage("Gui/buttons/normal/accept.png");
}
function setup() {
    createCanvas(displayWidth, displayHeight);

    //database
    database = firebase.database();

    //player
    player = new Player();

    //game object
    game = new Game();
    game.getstate();
    game.preStart();
}
function draw() {
    
    if(playercount === 2){
        gamestate.update(2);
    }
}