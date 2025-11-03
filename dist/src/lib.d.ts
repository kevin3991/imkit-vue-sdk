import { ModalsContainer } from 'vue-final-modal';
import { App } from 'vue';
import { default as ChatRoom } from './components/ChatRoom.vue';
import { default as ChatRoomInfo } from './components/ChatRoomInfo.vue';
import { default as Config } from './classes/config';
import { default as RoomList } from './components/RoomList.vue';
import { Store } from 'vuex';
import { default as User } from './classes/user';
import { default as Message } from './classes/message';
type Options = {
    store: Store<any>;
    config: Config;
};
export { RoomList, ChatRoom, ChatRoomInfo, ModalsContainer, User, Message };
declare const _default: {
    install: (app: App, options: Options) => Promise<void>;
};
export default _default;
