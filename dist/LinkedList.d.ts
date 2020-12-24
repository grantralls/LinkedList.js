declare class LinkedList<T> {
    private head;
    private tail;
    private size;
    /**
     * @param entry data to append. This can be variable thanks to (typescript generics)[https://www.typescriptlang.org/docs/handbook/generics.html]
     */
    append(entry: T): void;
    private addFirstNode;
    traverse(): IterableIterator<T>;
    contains(value: T): boolean;
}
export default LinkedList;