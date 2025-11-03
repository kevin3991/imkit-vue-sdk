type IMVideo = {
    id: string;
    width: number;
    height: number;
    thumbnailUrl: string;
    originalUrl: string;
    duration: number;
    thumbnailFile: {
        id: string;
        file: File;
    } | null | undefined;
};
export declare const file2video: (file: File) => Promise<IMVideo>;
export default IMVideo;
