export interface Node<Type> {
    prev: Node<Type>,
    next: Node<Type>,
    data: Type
}

export class LinkedList<DataType> {
    protected front: Node<DataType>;
    protected end: Node<DataType>;

    constructor() {
        this.front = null;
        this.end = null;
    }

    add(item: DataType): void {
        const node = {
            next: null,
            prev: this.end,
            data: item
        } as Node<DataType>;
        if (this.end) {
            this.end.next = node;
            this.end = node;
        } else {
            this.end = node;
            this.front = this.end;
        }
    }

    addToFront(item: DataType): void {
        const node = {
            data: item,
            prev: null,
            next: this.front
        } as Node<DataType>;
        this.front.prev = node;
        this.front = node;
    }

    *getIterator(): IterableIterator<Node<DataType>> {
        const node = this.front;
        while (node){
            yield node;
        }
    }

    printList(writerFn: (arg: DataType) => void): void {
        let node: Node<DataType> = this.front;
        while (node.next !== null) {
            writerFn(node.data)
            node = node.next;
        }
    }
}