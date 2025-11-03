export default class Folder {
    id: string;
    name: string;
    roomIds: string[];
    constructor(id: string, name: string, roomIds: string[]);
    get payload(): Record<string, unknown>;
}
