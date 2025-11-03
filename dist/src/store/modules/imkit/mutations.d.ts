import { IMState } from './state';
import { default as Message } from '../../../classes/message';
import { default as MessageLinkedList } from '../../../classes/messageLinkedList';
import { MutationTree } from 'vuex';
import { IMMutationTypes as MutationTypes } from './mutation-types';
import { default as Room } from '../../../classes/room';
export type Mutations<S = IMState> = {
    [MutationTypes.increment](state: S): void;
    [MutationTypes.setState](state: S, payload: Record<string, unknown>): void;
    [MutationTypes.updateField](state: S, payload: {
        key: keyof S;
        value: Record<string, unknown>;
    }): void;
    [MutationTypes.deleteField](state: S, payload: {
        key: keyof S;
        value: string;
    }): void;
    [MutationTypes.updateRoom](state: S, payload: Room): void;
    [MutationTypes.updateMessage](state: S, payload: Message): void;
    [MutationTypes.updateLastRead](state: S, event: {
        roomId: string;
        uid: string;
        messageId: string;
    }): void;
    [MutationTypes.pushMessage](state: S, message: Message): void;
    [MutationTypes.replaceMessage](state: S, payload: {
        targetMessageId: string;
        message: Message;
    }): void;
    [MutationTypes.deleteMessages](state: S, messageIds: string[]): void;
    [MutationTypes.clearChatRoom](state: S): void;
    [MutationTypes.deleteRoom](state: S, roomId: string): void;
    [MutationTypes.setMap](state: S, payload: {
        mapName: keyof S;
        key: string;
        value: unknown;
    }): void;
    [MutationTypes.deleteMap](state: S, payload: {
        mapName: keyof S;
        key: string;
    }): void;
    [MutationTypes.insertMessageLinkedList](state: S, linkedList: MessageLinkedList): void;
    [MutationTypes.concateMessageLinkedList](state: S, linkedList: MessageLinkedList): void;
    [MutationTypes.unshiftMessageLinkedList](state: S, linkedList: MessageLinkedList): void;
};
export declare const mutations: MutationTree<IMState> & Mutations;
