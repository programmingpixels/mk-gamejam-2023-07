const COLORS = ["#010101", "#232323", "#454545", "#676767", "#898989", "#ABABAB", "#CDCDCD", "#EFEFEF", "#FFFFFF",
    "#EFEFEF", "#CDCDCD", "#ABABAB", "#898989", "676767", "454545", "232323"];
export class Star {
    constructor(canvasWidth, canvasHeight) {
        this.getColorHex = () => {
            return COLORS[this.color];
        };
        this.update = () => {
            this.timeLeft -= 1;
            if (this.timeLeft <= 0) {
                this.timeLeft = this.period;
                this.color += 1;
                if (this.color > (COLORS.length - 1)) {
                    this.color = 0;
                }
            }
        };
        this.x = Math.floor(Math.random() * canvasWidth);
        this.y = Math.floor(Math.random() * canvasHeight);
        this.period = Math.floor((Math.random() * 10) + 1);
        this.timeLeft = this.period;
        this.color = Math.floor(Math.random() * COLORS.length);
    }
}
