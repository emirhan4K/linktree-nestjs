export declare class MailService {
    private transporter;
    constructor();
    sendVerificationEmail(userEmail: string, code: string): Promise<void>;
}
