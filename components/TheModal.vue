<script setup lang="ts">
import { useModal } from '~/composables/useModal';
</script>

<template>
    <div class="TheModal">
        <Transition name="modal" mode="out-in">
            <div
                v-if="useModal.data"
                :class="$style.wrapper"
                @click.self="useModal.close"
            >
                <component :is="useModal.data" @close="useModal.close"/>
            </div>
        </Transition>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--ui-black-color-80);
    pointer-events: auto;

    &:global(.modal-enter-active),
    &:global(.modal-leave-active) {
        transition: opacity .3s ease;
    }

    &:global(.modal-enter-from),
    &:global(.modal-leave-active) {
        opacity: 0;
        transition: opacity .3s ease .2s;
    }

    &:global(.modal-enter-from) {
        opacity: 0;
    }
}
</style>
