<template>
    <div class="TheFooter">
        <div :class="$style.wrapper">
            &copy;{{ new Date().getFullYear() }}
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    column-gap: calc(var(--ui-unit) * 12);
    padding: calc(var(--ui-unit) * 4);
    color: var(--ui-white-color);
}
</style>
