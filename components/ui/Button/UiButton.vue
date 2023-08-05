<script setup lang="ts">
// UiKit Components
import { UiButton } from '@ovchinnikov-lxs-frontend/ui-kit';

defineProps({
    color: {
        type: String,
        default: 'accent',
    },

    size: {
        type: String,
        default: 'medium',
    },
});
</script>

<template>
    <UiButton
        :color="color"
        :size="size"
        v-bind="$attrs"
    >
        <slot></slot>
    </UiButton>
</template>

<style lang="scss">
.UiButton {
    position: relative;
    transition: none;

    &:before,
    &:after {
        content: '';
        position: absolute;
        box-sizing: content-box;
        width: 100%;
        height: 100%;
    }

    &.--accent-color {
        background-color: var(--ui-accent-color);
        color: var(--ui-white-color);
        box-shadow: inset -2px -2px 0 0 var(--ui-black-color);

        &:before {
            top: -2px;
            left: 0;
            border-top: 2px solid var(--ui-white-color);
            border-bottom: 2px solid var(--ui-white-color);
        }

        &:after {
            top: 0;
            left: -2px;
            border-right: 2px solid var(--ui-white-color);
            border-left: 2px solid var(--ui-white-color);
        }

        @include hover {
            opacity: .8;
            box-shadow: inset -4px -4px 0 0 var(--ui-black-color);
        }

        &:active {
            box-shadow: inset 4px 4px 0 0 var(--ui-black-color);
        }
    }

    &.--medium-size {
        padding: calc(var(--ui-unit) * 3) calc(var(--ui-unit) * 5);
        font-size: 1rem;
        line-height: 1;
    }
}
</style>
