<script setup lang="ts">
import { Platform } from '~/assets/ts/platform';
import { Ball } from '~/assets/ts/ball';
import { useModal } from '~/composables/useModal';

const score = useScore();
const wrapperRef = ref<HTMLDivElement>();
const canvasRef = ref<HTMLCanvasElement>();

let canvasContex: CanvasRenderingContext2D | null;
let resizeObserver: ResizeObserver;
let interval: NodeJS.Timer;

let leftPlatform: Platform;
let rightPlatform: Platform;

let ball: Ball;

function drawBall() {
    if (!canvasContex || !canvasRef.value) {
        return false;
    }

    canvasContex.beginPath();
    canvasContex.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    canvasContex.fillStyle = getComputedStyle(canvasRef.value).getPropertyValue('--ui-white-color');
    canvasContex.fill();
    canvasContex.closePath();
}

function drawPlatform() {
    if (!canvasContex || !canvasRef.value) {
        return false;
    }

    canvasContex.fillStyle = getComputedStyle(canvasRef.value).getPropertyValue('--ui-white-color');
    canvasContex.fillRect(leftPlatform.xPosition, leftPlatform.yPosition, leftPlatform.width, leftPlatform.height);
    canvasContex.fillRect(rightPlatform.xPosition, rightPlatform.yPosition, rightPlatform.width, rightPlatform.height);
}

function drawBackground() {
    if (!canvasContex || !canvasRef.value) {
        return false;
    }

    canvasContex.fillStyle = getComputedStyle(canvasRef.value).getPropertyValue('--ui-black-color');
    canvasContex.fillRect(0, 0, canvasRef.value.width, canvasRef.value.height);
}

function draw() {
    if (!canvasRef.value || !canvasContex) {
        return false;
    }

    canvasContex.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);

    drawBackground();
    drawPlatform();
    drawBall();

    leftPlatform.updatePlatformPositions();
    rightPlatform.updatePlatformPositions();

    const res = ball.updateBallPosition(canvasRef.value, leftPlatform, rightPlatform);

    if (typeof res === 'number') {
        score.changeScore(res);
    }
}

function resizeCanvas() {
    if (!wrapperRef.value || !canvasRef.value) {
        return false;
    }

    canvasRef.value.width = wrapperRef.value.clientWidth;
    canvasRef.value.height = wrapperRef.value.clientHeight;

    leftPlatform.update(canvasRef.value);
    rightPlatform.update(canvasRef.value);

    draw();
}


function resetGame() {
    if (!canvasRef.value) {
        return false;
    }

    clearInterval(interval);
    score.restart();
    ball.restart(canvasRef.value);
    startGameLoop();
}

watch(() => score.timeLeft, val => {
    if (val === score.gameTime) {
        setTimeout(resetGame, 300);
    }
});

function endGame() {
    if (score.table[0] > score.table[1]) {
        score.setWinner('Left Player winner!');
    } else if (score.table[1] > score.table[0]) {
        score.setWinner('Right Player winner!');
    } else {
        score.setWinner('Draw!');
    }

    clearInterval(interval);
    useModal.open(defineAsyncComponent(() => import('~/components/Pong/PongModal.vue')));
}

function updateTimer() {
    score.timeLeft -= 0.0167;

    if (score.timeLeft <= 0) {
        endGame();
    }
}

function startGameLoop() {
    interval = setInterval(() => {
        draw();
        updateTimer();
    }, 16.67); // 60 FPS
}

function onInit() {
    if (!canvasRef.value || !wrapperRef.value) {
        return false;
    }
    canvasContex = canvasRef.value.getContext('2d');

    canvasRef.value.width = wrapperRef.value.clientWidth;
    canvasRef.value.height = wrapperRef.value.clientHeight;

    leftPlatform = new Platform(canvasRef.value, 'left', canvasRef.value.width * 0.01);
    rightPlatform = new Platform(canvasRef.value, 'right', canvasRef.value.width * 0.01);
    ball = new Ball(canvasRef.value, canvasRef.value.width * 0.01);

    startGameLoop();
}

const keysPressed: {
    [key: string]: boolean
} = {};

function handleKeyUp(event: KeyboardEvent) {
    delete keysPressed[event.key];
}

function handleKeyDown(event: KeyboardEvent) {
    keysPressed[event.key] = true;

    if (keysPressed.w) {
        leftPlatform.goToTop();
    }
    if (keysPressed.s) {
        leftPlatform.goToBottom();
    }
    if (keysPressed.ArrowUp) {
        rightPlatform.goToTop();
    }
    if (keysPressed.ArrowDown) {
        rightPlatform.goToBottom();
    }
    draw();
}

function addListeners() {
    if (!wrapperRef.value) {
        return false;
    }

    resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(wrapperRef.value);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
}

function removeListeners() {
    if (resizeObserver) {
        resizeObserver.disconnect();
    }

    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
}

onMounted(() => {
    onInit();
    addListeners();
});

onUnmounted(() => {
    removeListeners();

    if (interval) {
        clearInterval(interval);
    }
});
</script>

<template>
    <div class="Pong">
        <div ref="wrapperRef" :class="$style.wrapper">
            <canvas ref="canvasRef" :class="$style.canvas">
            </canvas>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    --border-width: calc(var(--ui-unit) * 2);

    position: relative;
    width: 100%;
    height: 100%;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        z-index: 4;
        width: var(--border-width);
        height: 100%;
        background-color: var(--ui-white-color);
        transform: translate3d(-50%, 0, 0);
    }
}

.canvas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: var(--border-width) solid var(--ui-white-color);
}
</style>
