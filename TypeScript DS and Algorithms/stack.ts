export class Stack<T> {
    stack: T[];
    length: number;
    readonly maxSize: number;

    constructor(maxSize: number) {
        this.length = 0;
        this.maxSize = maxSize;
        this.stack = new Array<T>(this.maxSize);
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    isFull(): boolean {
        return this.length === this.maxSize;
    }

    push(newItem: T): void {
        throw new Error('Implementation not provided');
    }

    pop(): T {
        throw new Error('Implementation not provided');
    }

    top(): T {
        throw new Error('Implementation not provided');
    }

    stackContents(): void {
        console.log('Stack Contents');
        for (let i = 0; i < this.length; ++i) {
            console.log(`stack[${i}]: ${this.stack[i]}`);
        }
    }
}