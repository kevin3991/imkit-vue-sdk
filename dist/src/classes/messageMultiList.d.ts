import { default as MessageLinkedList } from './messageLinkedList';
export default class MessageMultiList {
    head: MessageLinkedList | null;
    tail: MessageLinkedList | null;
    main: MessageLinkedList | null;
    length: number;
    constructor(linkedList?: MessageLinkedList | null);
    numberOfMessages(): number;
    concate(linkedList: MessageLinkedList): void;
    unshift(linkedList: MessageLinkedList): void;
    insert(linkedList: MessageLinkedList): void;
    merge(): void;
    isValid(): boolean;
}
