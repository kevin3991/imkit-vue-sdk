import { AxiosInstance } from 'axios';
import { default as Config } from './classes/config';
import { Store } from 'vuex';
export declare function createAxios(config: Config, store: Store<any>): AxiosInstance;
