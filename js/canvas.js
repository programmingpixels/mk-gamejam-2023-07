
const config = {
    canvasWidth: 1000,
    canvasHeight: 800,
    bgColor: "#000000"
};

// TODO : return both required canvases
const initializeCanvas = () => {
    //make an off screen canvas to hold all the sprites
    backCanvas = createAnyCanvas("back");

    //make an on screen canvas to draw things
    frontCanvas = createAnyCanvas("front");

};

const createAnyCanvas = (visible) => {
    if (visible = "front") {
        anyCanvas = document.getElementById("frontCanvas");
    }
    else if (visible = "back") {
        anyCanvas = document.createElement('canvas');
    }
    anyCanvas.width = config.canvasWidth;
    anyCanvas.height = config.canvasHeight;
    anyCanvas.ctx = anyCanvas.getContext("2d");
    return anyCanvas;
};

const paintBack = () => {   // draw the background color
    frontCanvas.ctx.fillStyle = config.bgColor;
    frontCanvas.ctx.fillRect(0, 0, config.canvasWidth, config.canvasHeight);
};

// TODO: predraw all the sprites to the back canvas
const initialiseBackCanvas = () => {

}

class Star {
    constructor(){
    this.star_colors = [ "#010101", "#232323", "#454545", "#676767", "#898989", "#ABABAB", "#CDCDCD", "#EFEFEF", "#FFFFFF",
                         "#EFEFEF", "#CDCDCD", "#ABABAB", "#898989", "676767", "454545", "232323" ];
    this.x = Math.floor(Math.random() * config.canvasWidth);
    this.y = Math.floor(Math.random() * config.canvasHeight);
    this.persistence = Math.floor((Math.random() * 100) + 60);
    this.decay = this.persistence;
    this.color = Math.floor( Math.random() * this.star_colors.length );
    }

    update = () => {
        this.decay -= 1;
        if ( this.decay <= 0 ) {
            this.decay = this.persistence;
            this.color += 1;
            if ( this.color > (this.star_colors.length - 1) ) {
                this.color = 0;
            }
        }
    }

    paint = () => {
        frontCanvas.ctx.fillStyle = this.star_colors[(this.color)];
        frontCanvas.ctx.fillRect(this.x, this.y, 1, 1);
    }
}

class TitleScreen {
    constructor() {
        this.numOfStars = 20;
        this.stars = [];
        for (let i = 0; i < this.numOfStars; i++) {
            const s = new Star();
            this.stars.push(s);
        };
        console.log(this.stars);
    }

    paintStars = () => {
        for (let i = 0; i < this.numOfStars; i++) {
            this.stars[i].paint();
            this.stars[i].update();
        };
    }
};