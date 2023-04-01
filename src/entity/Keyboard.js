class Keyboard extends rune.input.Keyboard {
    constructor(boolean,left,right,up,down) {
        super(boolean);
        this.left = left;
        this.right = right;
        this.up = up;
        this.down = down;
    }
    init() {
        super.init();
    }
    handleInput(player) {
        if (this.pressed(this.left)) player.x--;
        if (this.pressed(this.right)) player.x++;
        if (this.pressed(this.up)) player.y--;
        if (this.pressed(this.down)) player.y++;
    }
}