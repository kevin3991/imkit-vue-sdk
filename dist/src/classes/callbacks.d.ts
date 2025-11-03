import { default as Message } from './message';
import { default as User } from './user';
export type PaymentDetail = {
    status: number;
    errorCode: number;
    message: string;
    data: {
        id: string;
        chatUserId: string;
        chatRoomId: string;
        amount: number;
        currency: string;
        note: string;
        status: number;
        method: number;
        request_at: string;
        payment_at: string | null;
        payerName: string;
        createdAt: string;
        updatedAt: string;
        payment_user: string | null;
        enterpoint: {
            name: string;
            token: string;
        };
    };
};
type PaymentDetailUrl = {
    url: string;
};
type Callbacks = {
    onMessageReceived: (message: Message, sender: User) => void;
    onMessageSent: (message: Message) => void;
    flexMessageInputSubmitted: (message: Message, value: string) => void;
    flexMessageRatingSubmitted: (message: Message, rating: string) => void;
    onChatbotStateChange: (roomId: string, enabled: boolean) => Promise<boolean>;
    onPaymentRequestCreated: (token: string, chatRoomId: string, payerName: string, chatUserId: string, amount: string, currency: string, remark: string) => Promise<void>;
    onPaymentDetailFetched: (paymentId: string) => Promise<PaymentDetail>;
    onPaymentDetailUrlGenerated: (paymentId: string, paymentMethod: string) => Promise<PaymentDetailUrl>;
};
export default Callbacks;
