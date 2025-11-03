import { Dayjs } from 'dayjs';
declare const toLocaleString: (millis: number, t: (str: string) => string, now?: Dayjs) => string;
export default toLocaleString;
