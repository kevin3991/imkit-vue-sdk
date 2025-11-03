import { default as Callbacks } from './callbacks';
import { default as Settings } from './settings';
import { default as Styles } from './styles';
type Config = {
    domain: string;
    clientKey: string;
    token: string;
    translationApiKey: string;
    mapApiKey: string;
    firebaseConfig: {
        apiKey: string;
        authDomain: string;
        databaseURL: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
        measurementId: string;
    } | null | undefined;
    firebaseVapidKey: string | undefined;
    settings: Settings;
    styles: Styles;
    callbacks: Callbacks;
};
export default Config;
