<script setup lang="ts">
import { leadingZero } from '~/assets/ts/utils/format-utils';

const score = useScore();

function onRestart() {
    score.timeLeft = score.gameTime;
}
</script>

<template>
    <div class="PongScore">
        <div :class="$style.wrapper">
            <div :class="$style.button">
                <UiButton @click="onRestart">Restart</UiButton>
            </div>

            <div :class="$style.score">
                <Transition name="top" mode="out-in">
                    <div :key="score.table[0]">{{ score.table[0] }}</div>
                </Transition>
                |
                <Transition name="top" mode="out-in">
                    <div :key="score.table[1]">{{ score.table[1] }}</div>
                </Transition>
            </div>

            <div :class="$style.timer">
                Time left: {{ leadingZero(Number(score.timeLeft.toFixed())) }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    font-size: 2rem;
}

.score {
    display: flex;
    justify-content: center;
    width: 30%;
    column-gap: calc(var(--ui-unit) * 4);
    text-align: center;
}

.timer {
    text-align: right;
}

.timer,
.button {
    width: calc(70% / 2);
}
</style>
