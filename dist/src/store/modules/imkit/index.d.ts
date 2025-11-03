import { Store as VuexStore, DispatchOptions, CommitOptions, Module } from 'vuex';
import { RootState } from '../../../store';
import { Actions } from './actions';
import { Getters } from './getters';
import { Mutations } from './mutations';
import { IMState } from './state';
export { IMState };
export type IMStore<S = IMState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(key: K, payload: P, options?: CommitOptions): ReturnType<Mutations[K]>;
} & {
    dispatch<K extends keyof Actions>(key: K, payload: Parameters<Actions[K]>[1], options?: DispatchOptions): ReturnType<Actions[K]>;
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>;
    };
};
export declare const store: Module<IMState, RootState>;
