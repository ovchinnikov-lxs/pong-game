import { Platform } from '~/assets/ts/platform';

export class Ball {
    canvas: HTMLCanvasElement;
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    radius: number;
    padding: number;

    constructor(canvas: HTMLCanvasElement, padding: number, radius?: number) {
        const speedX = Math.random() > 0.5 ? 0.007 : -0.007;
        const speedY = Math.random() > 0.5 ? 0.007 : -0.007;

        this.canvas = canvas;
        this.speedX = this.canvas.width * speedX;
        this.speedY = this.canvas.height * speedY;
        this.radius = this.canvas.width * 0.01;
        this.padding = padding;
        this.x = this.canvas.width / 2 - this.radius / 2;
        this.y = this.canvas.height / 2 - this.radius / 2;

        if (radius) {
            this.radius = radius;
        }
    }

    restart(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const speedX = Math.random() > 0.5 ? 0.007 : -0.007;
        const speedY = Math.random() > 0.5 ? 0.007 : -0.007;

        this.speedX = this.canvas.width * speedX;
        this.speedY = this.canvas.height * speedY;
        this.x = this.canvas.width / 2 - this.radius / 2;
        this.y = this.canvas.height / 2 - this.radius / 2;
    }

    updateBallPosition(canvas: HTMLCanvasElement, leftPlatform: Platform, rightPlatform: Platform): number | void {
        this.canvas = canvas;
        this.x += this.speedX;
        this.y += this.speedY;

        // Обработка столкновения мяча с верхней и нижней границами поля
        if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
            this.speedY = -this.speedY;
        }

        // Обработка столкновения мяча с платформами
        if (
            (this.x - this.radius < leftPlatform.width + this.padding && this.y > leftPlatform.yPosition && this.y < leftPlatform.yPosition + leftPlatform.height) ||
            (this.x + this.radius > this.canvas.width - (rightPlatform.width + this.padding) && this.y > rightPlatform.yPosition && this.y < rightPlatform.yPosition + rightPlatform.height)
        ) {
            this.speedX = -this.speedX;
        }

        // Обработка пересечения границ поля и увеличение счета
        if (this.x + this.radius > this.canvas.width) {
            this.speedX = -this.speedX;
            return 0;
        } else if (this.x - this.radius < 0) {
            this.speedX = -this.speedX;
            return 1;
        }
    }
}
