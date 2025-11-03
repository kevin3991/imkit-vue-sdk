import { Reaction } from '../classes/message';
interface Props {
    reactions: Reaction[];
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    selectEmoji: (emoji: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onSelectEmoji?: ((emoji: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
