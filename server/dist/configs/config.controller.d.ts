import { ConfigSearchDto } from "./dto/config-search.dto";
import { ConfigDto } from "./dto/config.dto";
import { ConfigService } from "./config.service";
export declare class ConfigController {
    private readonly configService;
    constructor(configService: ConfigService);
    getConfigById(configId: string): Promise<import("rxjs").Observable<ConfigDto>>;
    findAll(): Promise<import("rxjs").Observable<any>>;
    createConfig(configDto: ConfigDto): Promise<import("rxjs").Observable<import("./dto/config-response.dto").ConfigResponseDto>>;
    updateConfig(configId: string, configDto: ConfigDto): Promise<import("rxjs").Observable<import("./dto/config-response.dto").ConfigResponseDto>>;
    searchConfig(configSearchDto: ConfigSearchDto): Promise<import("rxjs").Observable<any>>;
    findConfigByKey(key: String): Promise<import("rxjs").Observable<any>>;
    findConfigByContext(context: String): Promise<import("rxjs").Observable<any>>;
}
