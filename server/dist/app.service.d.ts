export declare class AppService {
    getHello(): string;
}
declare class DbConfigService {
    private env;
    constructor(env: {
        [k: string]: string | undefined;
    });
    private getValue;
    ensureValues(keys: string[]): this;
    getPort(): string;
    isProduction(): boolean;
}
declare const dbConfigService: DbConfigService;
export { dbConfigService };
