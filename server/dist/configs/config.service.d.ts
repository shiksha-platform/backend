import { HttpService } from "@nestjs/axios";
import { Observable } from "rxjs";
import { ConfigDto } from "./dto/config.dto";
import { ConfigResponseDto } from "./dto/config-response.dto";
import { ConfigSearchDto } from "./dto/config-search.dto";
export declare class ConfigService {
    private httpService;
    constructor(httpService: HttpService);
    url: string;
    findById(configId: string): Promise<Observable<ConfigDto>>;
    createConfig(configDto: ConfigDto): Promise<Observable<ConfigResponseDto>>;
    updateConfig(configId: string, configDto: ConfigDto): Promise<Observable<ConfigResponseDto>>;
    searchConfig(configSearchDto: ConfigSearchDto): Promise<Observable<any>>;
    findConfigByKey(key: String): Promise<Observable<any>>;
    findConfigByContext(context: String): Promise<Observable<any>>;
    findAll(): Promise<Observable<any>>;
}
