<template>
    <div class="TheHeader">
        <div :class="$style.wrapper">
            <PongScore :class="$style.score"/>
        </div>
    </div>
</template>


<style lang="scss" module>
.wrapper {
    width: 100%;
    height: 100%;
    padding: calc(var(--ui-unit) * 4);
}

.score {
    margin: 0 auto;
}
</style>
