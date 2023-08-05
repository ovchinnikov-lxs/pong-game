const DEFAULT_TABLE = [0, 0];
export const useScore = defineStore('score', {
    state: () => ({
        table: DEFAULT_TABLE,
    }),

    actions: {
        changeScore(index: number) {
            this.table[index]++;
        },

        restart() {
            this.table = DEFAULT_TABLE;
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useScore, import.meta.hot));
}
