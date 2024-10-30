
interface HashnodeSDKClientOptions {
    apiKey: string;
    baseUrl: string;
}

export class HashnodeSDKClient {
    private readonly apiKey: string;
    private readonly baseUrl: string;

    constructor({
        apiKey,
        baseUrl
    }: HashnodeSDKClientOptions) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }

    logger(message: string) {
        console.log(message);
    }

}

