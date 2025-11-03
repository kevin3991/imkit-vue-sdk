import { IMState, IMStore } from './modules/imkit';
export type RootState = {
    imkit: IMState;
};
export type Store = IMStore<Pick<RootState, 'imkit'>>;
export declare const store: import('vuex').Store<RootState>;
