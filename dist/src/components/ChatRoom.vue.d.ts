type __VLS_Props = {
    isTestPreview?: boolean;
    pinchatLink?: string;
    chatStyle?: any;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        setting?(_: {}): any;
    };
    refs: {
        vl: any;
        input: HTMLTextAreaElement;
        stickerButtonEl: HTMLButtonElement;
        emojiButtonEl: HTMLButtonElement;
        fileInput: HTMLInputElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    send: (...args: any[]) => void;
    goBack: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSend?: ((...args: any[]) => any) | undefined;
    onGoBack?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    vl: any;
    input: HTMLTextAreaElement;
    stickerButtonEl: HTMLButtonElement;
    emojiButtonEl: HTMLButtonElement;
    fileInput: HTMLInputElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
