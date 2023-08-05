<template>
    <div :class="$style.DefaultLayout">
        <TheModal :class="$style.modal"/>
        <TheHeader :class="$style.header"/>

        <div :class="$style.container">
            <slot/>
        </div>

        <TheFooter :class="$style.footer"/>
    </div>
</template>

<style lang="scss" module>
.DefaultLayout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
}

.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    pointer-events: none;
}

.header,
.footer {
    flex-shrink: 0;
}

.container {
    display: flex;
    flex-grow: 1;

    & > * {
        flex-grow: 1;
    }
}
</style>
