declare class User {
    id: string;
    nickname: string;
    avatarUrl: string;
    country: string | null;
    city: string | null;
    clientType: string | null;
    memberIds: {
        [id: string]: boolean;
    };
    constructor(raw: any);
}
export default User;
