class Form {
    constructor() {
        // play button
        this.playbutton = createSprite(displayWidth / 2, displayHeight - 200);
        this.playbutton.addImage(playImg);

        // settings 
        this.setting = createSprite(displayWidth / 2 + 100, displayHeight - 200);
        this.setting.addImage(settingImg);

        // Player Info
        this.info = createSprite(displayWidth / 2 - 100, displayHeight - 200);
        this.info.addImage(infoImg);
    }
    display() {
        background(backGui);
        drawSprites();
    }
    hide() {
        this.playbutton.visible = false;
        this.setting.visible = false;
        this.info.visible = false;
    }
}