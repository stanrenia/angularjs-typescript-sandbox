
const RANDOM_STRING_VALUES = ['a', 'f', 'z', 'e', 1, 2, 3, 7];
const RANDOM_COLORS = ['red', 'green', 'blue', 'yellow', 'purple', 'white', 'brown', 'aqua'];
const RANDOM_TYPES = ['A', 'B', 'C', 'D'];

function range(startInclusive: number, endExclusive: number): number {
    return Math.round(Math.random() * (endExclusive - 1)) + startInclusive;
}

export class RandomService {
    
    constructor() {}

    public randomFrom(arr: Array<any>) {
        return arr[range(0, arr.length - 1)];
    }

    public randomBool(): boolean {
        return Math.random() < 0.5;
    }

    public randomType(): string {
        return RANDOM_TYPES[range(0, 4)];
    }

    public randomColor(): string {
        return RANDOM_COLORS[range(0, 8)];
    }

    public randomValue(): string {
        let s = "";
        const length = range(0, 21);
        for (let i=0; i < length; i++) {
            const index = range(0, 8);
            s = s + RANDOM_STRING_VALUES[index];
        }

        return s;
    }
}