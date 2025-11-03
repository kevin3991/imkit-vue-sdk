import { default as Message } from './message';
export default class MessageLinkedList {
    head: Message | null;
    tail: Message | null;
    length: number;
    map: Map<string, Message>;
    messageGroups: Map<string, Message[]>;
    firstMessageOfDate: Map<number, Message>;
    prev: MessageLinkedList | null;
    next: MessageLinkedList | null;
    constructor(data: Array<Record<string, unknown>>);
    append(message: Message): void;
    insertMessageToGroup(message: Message): void;
    remove(id: string): void;
    replace(id: string, message: Message): void;
    concate(linkedList: MessageLinkedList): void;
    unshift(linkedList: MessageLinkedList): void;
    resetHead(id: string): void;
    resetTail(id: string): void;
    canCombine(linkedList: MessageLinkedList): boolean;
    combine(linkedList: MessageLinkedList): void;
    array(): Message[];
    finds(id: string): Message | undefined;
    contains(id: string): boolean;
    isValid(): boolean;
}
