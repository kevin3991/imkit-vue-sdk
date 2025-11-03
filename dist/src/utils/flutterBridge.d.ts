/**
 * Flutter Bridge Utility
 * Provides methods to communicate with Flutter WebView
 */
export interface FlutterFileDownloadMessage {
    type: 'FILE_DOWNLOAD';
    data: {
        url: string;
        fileName: string;
        fileExtension: string;
        blob?: string;
        mimeType: string;
        fileSize: number;
    };
}
export interface FlutterFileChunkMessage {
    type: 'FILE_CHUNK';
    data: {
        chunkId: string;
        chunkIndex: number;
        totalChunks: number;
        chunk: string;
        fileName: string;
        fileExtension: string;
        mimeType: string;
        fileSize: number;
    };
}
/**
 * Check if the app is running inside a Flutter WebView
 */
export declare const isFlutterWebView: () => boolean;
/**
 * Send file download message to Flutter
 * For large files (>2MB), split into chunks and send separately
 * For small files, send the base64 blob data in a single message
 */
export declare const sendFileDownloadToFlutter: (url: string, fileName: string, fileExtension: string, blob: Blob) => Promise<void>;
