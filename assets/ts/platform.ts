type SideType = 'left' | 'right';

export class Platform {
    canvas: HTMLCanvasElement;
    side: SideType;
    width = 12;
    height = 200;
    targetYPosition = 0;
    xPosition = 0;
    yPosition = 0;
    easing = 0.1667;
    step = 60;
    padding = 0;

    constructor(canvas: HTMLCanvasElement, side: SideType, padding: number) {
        this.canvas = canvas;
        this.side = side;
        this.padding = padding;
        this.step = this.canvas.height * 0.05;
        this.init();
    }

    goToTop() {
        if (this.targetYPosition - this.step < 0) {
            this.targetYPosition = 0;
            return false;
        }

        this.targetYPosition -= this.step;
    }

    goToBottom() {
        if (this.targetYPosition + this.step + this.height > this.canvas.height) {
            this.targetYPosition = this.canvas.height - this.height;
            return false;
        }

        this.targetYPosition += this.step;
    }

    updatePlatformPositions() {
        this.yPosition += (this.targetYPosition - this.yPosition) * this.easing;
    }

    setXPosition() {
        switch (this.side) {
            case 'left':
                this.xPosition = this.padding;
                break;
            case 'right':
                this.xPosition = this.canvas.width - this.padding - this.width;
                break;
        }
    }

    setYPosition() {
        this.yPosition = this.targetYPosition = this.canvas.height / 2 - this.height / 2;
    }

    setSize() {
        this.width = this.canvas.width * 0.01;
        this.height = this.canvas.height * 0.2;
    }

    init() {
        this.setSize();
        this.setXPosition();
        this.setYPosition();
    }

    update(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.setSize();
        this.setXPosition();
        this.setYPosition();
    }
}
