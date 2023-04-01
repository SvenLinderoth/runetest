class Character extends rune.display.Sprite {
    constructor(x,y,img){
        super(x, y, 32, 32, img);
        this.animation.create('idle', [0,1,2,3,4,5], 4, true);
    }
    init(){
        super.init();
        this.animate_idle();
    }
    animate_idle() {
        this.animation.gotoAndPlay('idle');
    }
}