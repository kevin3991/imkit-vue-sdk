type IMImage = {
    id: string;
    width: number;
    height: number;
    thumbnailUrl: string;
    originalUrl: string;
};
export declare const file2image: (file: File) => Promise<IMImage>;
export default IMImage;
