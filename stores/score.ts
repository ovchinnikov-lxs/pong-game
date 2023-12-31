export const useScore = defineStore('score', {
    state: () => ({
        table: [0, 0],
        gameTime: 60,
        timeLeft: 60,
        winner: '',
    }),

    actions: {
        changeScore(index: number) {
            this.table[index]++;
        },

        restart() {
            this.table = [0, 0];
            this.winner = '';
        },

        setWinner(payload: string) {
            this.winner = payload;
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useScore, import.meta.hot));
}
