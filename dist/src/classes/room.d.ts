import { default as Message } from './message';
import { default as User } from './user';
export declare enum RoomType {
    Direct = "direct",
    Group = "group"
}
type Avatar = {
    url: string;
    name: string;
};
declare class Room {
    id: string;
    name: string;
    type: RoomType;
    createdAt: number;
    updatedAt: number;
    memberIds: string[];
    isOutgoingGroupSender: {
        [id: string]: boolean;
    };
    coverUrl: string;
    lastMessage: Message | null;
    numberOfUnread: number;
    lastReadMessageId: {
        [uid: string]: string;
    };
    pref: {
        tags: string[];
        tagColors: {
            [tag: string]: string;
        };
        sticky: boolean;
        hidden: boolean;
    } | null;
    roomTags: string[];
    extra: Record<string, unknown>;
    muted: boolean;
    isSuperuser: boolean;
    description: string;
    constructor(raw: any, uid: string);
    get memberIdsWithoutMeAndMyGroup(): string[];
    _displayName(uid: string, users: {
        [uid: string]: User;
    }): string;
    get displayName(): string;
    get avatars(): Avatar[];
}
export default Room;
