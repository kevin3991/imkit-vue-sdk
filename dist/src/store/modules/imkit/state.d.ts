import { ClientToServerEvents, ServerToClientEvents } from '../../../socket';
import { Socket } from 'socket.io-client';
import { AxiosInstance } from 'axios';
import { Cache } from 'runtime-memcache';
import { default as Config } from '../../../classes/config';
import { default as Folder } from '../../../classes/folder';
import { default as LinkPreview } from '../../../classes/linkPreview';
import { default as Message } from '../../../classes/message';
import { default as MessageMultiList } from '../../../classes/messageMultiList';
import { default as RWLock } from 'async-rwlock';
import { default as Room } from '../../../classes/room';
import { SearchType } from '../../../enums/searchType';
import { default as User } from '../../../classes/user';
export type IMState = {
    count: number;
    config: Config;
    uid: string;
    axios: AxiosInstance;
    isRequesting: {
        [api: string]: Date | null;
    };
    socket: Socket<ServerToClientEvents, ClientToServerEvents>;
    imageCache: Cache<string>;
    translationCache: Cache<string>;
    users: {
        [uid: string]: User;
    };
    rooms: {
        [id: string]: Room;
    };
    sortedRooms: Room[];
    numberOfFetchedRooms: number;
    numberOfTotalRooms: number;
    uploadProgresses: {
        [id: string]: number;
    };
    downloadProgresses: {
        [id: string]: number;
    };
    linkPreviews: {
        [url: string]: LinkPreview;
    };
    actionMenuRoomId: string;
    actionMenuFolderId: string;
    folders: {
        [id: string]: Folder;
    };
    sortedFolderIds: string[];
    roomIdsInFolders: {
        [roomId: string]: boolean;
    };
    selectedRoomIdsForCreateFolder: {
        [roomId: string]: Date;
    };
    selectedFolderId: string;
    searchKeyword: string;
    searchType: SearchType;
    searchRooms: {
        [type: string]: Room[] | Folder[];
    };
    roomTag: string;
    deliveringMessages: Map<string, Message>;
    processingMessages: Map<string, Message>;
    rwlock: RWLock;
    selectedRoomId: string;
    messageMultiLists: Map<string, MessageMultiList>;
    numberOfTotalMessages: Map<string, number>;
    replyId: string;
    navigationTargetId: string;
    isRoomInfoVisible: boolean;
    isTyping: {
        [uid: string]: number;
    };
    isSearchInRoomMode: boolean;
    messageSearchKeyword: string;
    searchedMessageIds: Map<string, string[]>;
    blockedUsers: {
        [uid: string]: boolean;
    };
};
export declare const state: IMState;
