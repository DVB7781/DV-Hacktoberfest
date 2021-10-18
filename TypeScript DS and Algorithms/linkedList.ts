 export interface Node<T> {
    value: T
    next?: Node<T>
    prev?: Node<T>
  }
  
  export class DoubleLinkedList<T> {
    public head?: Node<T> = undefined;
    public tail?: Node<T> = undefined;
  
    add(value: T) {
      const node: Node<T> = {
        value,
        next: undefined,
        prev: undefined,
      }
      if (!this.head) {
        this.head = node;
      }
      if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
      }
      this.tail = node;
    }
  
    dequeue(): T | undefined {
      if (this.head) {
        const value = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
          this.tail = undefined;
        }
        else {
          this.head.prev = undefined;
        }
        return value;
      }
    }
  
    pop(): T | undefined {
      if (this.tail) {
        const value = this.tail.value;
        this.tail = this.tail.prev;
        if (!this.tail) {
          this.head = undefined;
        }
        else {
          this.tail.next = undefined;
        }
        return value;
      }
    }
  
    *values() {
      let current = this.head;
      while (current) {
        yield current.value;
        current = current.next;
      }
    }
  }