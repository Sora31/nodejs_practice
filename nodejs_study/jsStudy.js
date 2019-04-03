const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
}

const {getCandy, status: {count}} = candyMachine;   //getCandy 상수 안에 candyMachine.getCandy(){...}, count 상수 안에 candyMachine.status.count가 들어감

console.log(getCandy, count);

