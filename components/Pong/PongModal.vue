<script setup lang="ts">
import { useModal } from '~/composables/useModal';

const score = useScore();

function onRestart() {
    score.timeLeft = score.gameTime;
    useModal.close();
}
</script>

<template>
    <div class="PongModal">
        <div :class="$style.wrapper">
            {{ score.winner }}

            <UiButton @click="onRestart">
                Restart
            </UiButton>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    row-gap: calc(var(--ui-unit) * 6);
    font-size: 3rem;
}
</style>
