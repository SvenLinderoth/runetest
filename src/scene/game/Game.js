//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * Game scene.
 */
game.scene.Game = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Calls the constructor method of the super class.
     */
    rune.scene.Scene.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.scene.Game.prototype = Object.create(rune.scene.Scene.prototype);
game.scene.Game.prototype.constructor = game.scene.Game;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * This method is automatically executed once after the scene is instantiated. 
 * The method is used to create objects to be used within the scene.
 *
 * @returns {undefined}
 */
game.scene.Game.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    
    //var text = new rune.text.BitmapField("Hello World!");
    //text.autoSize = true;
    //text.center = this.application.screen.center;
    this.keyboard1 = new Keyboard(true,'left','right','up','down');
    this.keyboard1.enabled = true;

    this.keyboard2 = new Keyboard(true,'a','d','w','s');
    this.keyboard2.enabled = true;

    this.player1 = new Character(20, 20, 'character_piskel_2');
    this.player2 = new Character(60, 20, 'character_piskel1');

    this.stage.addChild(this.player1);
    this.stage.addChild(this.player2);

    // gör obj extenda sounds?
    // spela upp ljud med sound object inom Sounds obj? 
    var audio = new rune.media.Sounds();
    console.log(audio);
//---------------------------------------------------------------
//-----------    Kameror :: FRÅGA      -------------------
//---------------------------------------------------------------
    //kamera instanser för att följa spelare?
    // this.camera1 = new rune.camera.Camera(this.player1.x,this.player1.y,50,50);
    // this.camera2 = new rune.camera.Camera(this.player2.x,this.player2.y,50,50);
//---------------------------------------------------------------------------------
    // måste rendera ut stages på camera object istället för scene object?
    // kan rendera kamera obj på detta scene object?
//---------------------------------------------------------------
/* --------------- Alertnativt -------------------------------------
    this.cameras = new rune.camera.Cameras();
    this.camera1 = this.cameras.createCamera(x, y, width, height);
    --------------- Alt 2 --------------
   this.cameras = [];
   this.camera = new rune.camera.Camera(x,y,width,height);
   for (let i = 0; i < choose_players.length; i++) {
    this.cameras.push(this.camera);
   }
*/
};

/**
 * This method is automatically executed once per "tick". The method is used for 
 * calculations such as application logic.
 *
 * @param {number} step Fixed time step.
 *
 * @returns {undefined}
 */
game.scene.Game.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    
    this.keyboard1.handleInput(this.player1);
    this.keyboard2.handleInput(this.player2);
};

/**
 * This method is automatically called once just before the scene ends. Use 
 * the method to reset references and remove objects that no longer need to 
 * exist when the scene is destroyed. The process is performed in order to 
 * avoid memory leaks.
 *
 * @returns {undefined}
 */
game.scene.Game.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};