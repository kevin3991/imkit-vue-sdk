import { ActionContext, ActionTree } from 'vuex';
import { default as Message } from '../../../classes/message';
import { IMActionTypes } from './action-types';
import { default as IMImage } from '../../../classes/image';
import { IMState } from './state';
import { default as LinkPreview } from '../../../classes/linkPreview';
import { Mutations } from './mutations';
import { RootState } from '../../../store';
type AugmentedActionContext = {
    commit<K extends keyof Mutations>(key: K, payload?: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<IMState, RootState>, 'commit'>;
export interface Actions {
    [IMActionTypes.increment](context: AugmentedActionContext): void;
    [IMActionTypes.fetchRooms](context: AugmentedActionContext, payload: {
        pageSize: number | undefined;
    }): void;
    [IMActionTypes.loadMessages](context: AugmentedActionContext, payload: {
        roomId: string;
        beforeMessageId: string | null;
        afterMessageId: string | null;
        targetMessageId: string | null;
    }): void;
    [IMActionTypes.fetchRoom](context: AugmentedActionContext, roomId: string): void;
    [IMActionTypes.updateLastRead](context: AugmentedActionContext, roomId: string): void;
    [IMActionTypes.handleMessageFromSocket](context: AugmentedActionContext, message: Message): void;
    [IMActionTypes.handleRoomFromSocket](context: AugmentedActionContext, room: Record<string, unknown>): void;
    [IMActionTypes.handleLastReadFromSocket](context: AugmentedActionContext, event: {
        roomId: string;
        uid: string;
        messageId: string;
    }): void;
    [IMActionTypes.sendMessage](context: AugmentedActionContext, payload: Record<string, unknown>): void;
    [IMActionTypes.retryMessage](context: AugmentedActionContext, message: Message): void;
    [IMActionTypes.recallMessage](context: AugmentedActionContext, payload: {
        roomId: string;
        _id: string;
    }): void;
    [IMActionTypes.hideMessage](context: AugmentedActionContext, payload: {
        roomId: string;
        messageIds: string[];
    }): void;
    [IMActionTypes.deleteMessage](context: AugmentedActionContext, payload: {
        roomId: string;
        messageId: string;
    }): void;
    [IMActionTypes.uploadMedia](context: AugmentedActionContext, payload: {
        id: string;
        file: File;
    }): Promise<string>;
    [IMActionTypes.uploadImage](context: AugmentedActionContext, payload: {
        image: IMImage;
        file: File;
    }): Promise<{
        originalUrl: string;
        thumbnailUrl: string;
    }>;
    [IMActionTypes.fetchLinkPreview](context: AugmentedActionContext, url: string): Promise<LinkPreview>;
    [IMActionTypes.handleLinkPreviews](context: AugmentedActionContext, messages: Message[]): void;
    [IMActionTypes.fetchVideoBlob](context: AugmentedActionContext, url: string): Promise<Blob>;
    [IMActionTypes.navigateToMessage](context: AugmentedActionContext, messageId: string): void;
    [IMActionTypes.updateRoomPrefs](context: AugmentedActionContext, payload: {
        roomId: string;
        prefs: Record<string, unknown>;
        roomTag?: string;
    }): void;
    [IMActionTypes.fetchPrefs](context: AugmentedActionContext): void;
    [IMActionTypes.fetchRoomsInFolders](context: AugmentedActionContext): void;
    [IMActionTypes.updatePref](context: AugmentedActionContext, payload: {
        key: string;
        value: Record<string, unknown>;
    }): void;
    [IMActionTypes.deletePref](context: AugmentedActionContext, key: string): void;
    [IMActionTypes.updateFolder](context: AugmentedActionContext, payload: {
        folderKey: string;
        name: string;
    }): void;
    [IMActionTypes.removeFolder](context: AugmentedActionContext, folderId: string): void;
    [IMActionTypes.handlePrefChangeFromSocket](context: AugmentedActionContext, payload: Record<string, unknown>): void;
    [IMActionTypes.handlePrefDeleteFromSocket](context: AugmentedActionContext, payload: string): void;
    [IMActionTypes.aggregateRoomsAndFolders](context: AugmentedActionContext): void;
    [IMActionTypes.removeMembers](context: AugmentedActionContext, payload: {
        roomId: string;
        uids: string[];
    }): void;
    [IMActionTypes.handleTypingFromSocket](context: AugmentedActionContext, payload: {
        room: string;
        sender: string;
        senderInfo: {
            _id: string;
            avatarUrl: string;
            isRobot: boolean;
            nickname: string;
        };
    }): void;
    [IMActionTypes.insertUnreadMessage](context: AugmentedActionContext): void;
    [IMActionTypes.translate](context: AugmentedActionContext, text: string): Promise<string>;
    [IMActionTypes.searchRooms](context: AugmentedActionContext, keyword: string): void;
    [IMActionTypes.subscribe](context: AugmentedActionContext): void;
    [IMActionTypes.unsubscribe](context: AugmentedActionContext): void;
    [IMActionTypes.removeRoomFromFolder](context: AugmentedActionContext, roomId: string): void;
    [IMActionTypes.addRoomToFolder](context: AugmentedActionContext, payload: {
        roomId: string;
        folderId: string;
    }): void;
    [IMActionTypes.batchSendMessage](context: AugmentedActionContext, payload: Record<string, unknown>): void;
    [IMActionTypes.toggleNotification](context: AugmentedActionContext, roomId: string): void;
    [IMActionTypes.translateMessage](context: AugmentedActionContext, message: Message): void;
    [IMActionTypes.blockUser](context: AugmentedActionContext, payload: {
        roomId: string;
        uid: string;
    }): void;
    [IMActionTypes.unblockUser](context: AugmentedActionContext, payload: {
        roomId: string;
        uid: string;
    }): void;
    [IMActionTypes.getBlockList](context: AugmentedActionContext, roomId: string): void;
    [IMActionTypes.hideMessagesFromUserInRoom](context: AugmentedActionContext, roomId: string): void;
    [IMActionTypes.sendReaction](context: AugmentedActionContext, payload: {
        messageId: string;
        reaction: string;
    }): void;
    [IMActionTypes.handleAIStreamingFromSocket](context: AugmentedActionContext, payload: Record<string, unknown>): void;
    [IMActionTypes.checkNotificationPermission](context: AugmentedActionContext): void;
}
export declare const actions: ActionTree<IMState, RootState> & Actions;
export {};
