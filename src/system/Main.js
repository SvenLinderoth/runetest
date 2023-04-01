//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new instance of the Main class.
 *
 * @constructor
 * 
 * @class
 * @classdesc
 * 
 * Entry point class.
 */
game.system.Main = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Extend (Rune) Application.
     */
    rune.system.Application.call(this, {
        developer: "sven",
        app: "game",
        build: "0.0.0",
        scene: game.scene.Game,
        resources: game.data.Requests,
        useGamepads:true,
        useKeyboard:true,
        framerate: 60,
        debug: true
    });
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.system.Main.prototype = Object.create(rune.system.Application.prototype);
game.system.Main.prototype.constructor = game.system.Main;