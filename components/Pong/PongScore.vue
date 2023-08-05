<script setup lang="ts">
const score = useScore();
</script>

<template>
    <div class="PongScore">
        <div :class="$style.wrapper">
            <Transition name="top" mode="out-in">
                <div :key="score.table[0]">{{ score.table[0] }}</div>
            </Transition>
            |
            <Transition name="top" mode="out-in">
                <div :key="score.table[1]">{{ score.table[1] }}</div>
            </Transition>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    column-gap: calc(var(--ui-unit) * 4);
    font-size: 2rem;
}
</style>
