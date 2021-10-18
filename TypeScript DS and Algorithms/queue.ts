export class Queue<T> {
    queue: T[];
    length: number; 
    readonly maxSize: number; 

    constructor(maxSize: number) {
        this.maxSize = maxSize > 0 ? maxSize : 10;
        this.length = 0;
        this.queue = new Array<T>(this.maxSize);
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    isFull(): boolean {
        return this.length === this.maxSize;
    }
    
    enqueue(newItem: T): void {
        if (this.isFull()) {
            throw new Error('Queue overflow');
        } else {
            this.queue[this.length++] = newItem; 
        }
    }

    dequeue(): T {
        if (this.isEmpty()) {
            throw new Error('Queue underflow');
        }
        
        const retval = this.queue[0];

        for (let i = 0; i < this.length; i++) {
            this.queue[i] = this.queue[i + 1];
        }

        this.length--;
        return retval;
    }

    peek(): T {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.queue[0];
    }
    
    queueContents(): void {
        console.log('Queue Contents');
        for (let i = 0; i < this.length; ++i) {
            console.log(`queue[${i}]: ${this.queue[i]}`);
        }
    }
}