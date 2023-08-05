import { Component } from 'vue';

interface IModal {
    key: number
    data: Component | null
    open: (component: Component) => void
    close: () => void
}

export const useModal = reactive<IModal>({
    key: 0,
    data: null,
    open(component) {
        this.key++;
        this.data = shallowRef(component);
    },
    close() {
        this.data = null;
    },
});
