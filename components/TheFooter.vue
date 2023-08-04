<template>
    <div class="TheFooter">
        <div :class="$style.wrapper">
            <NuxtLink to="/">index</NuxtLink>
            <NuxtLink to="/second">second</NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    column-gap: calc(var(--ui-unit) * 12);
    padding: calc(var(--ui-unit) * 4);
}
</style>
