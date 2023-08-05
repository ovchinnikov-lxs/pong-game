<script setup lang="ts">
const canvasRef = ref<HTMLDivElement>();

function onInit() {
    console.log(canvasRef.value);
}

onMounted(() => {
    onInit();
});
</script>

<template>
    <div class="Pong">
        <div :class="$style.wrapper">
            <canvas ref="canvasRef" :class="$style.canvas">
            </canvas>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.canvas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
