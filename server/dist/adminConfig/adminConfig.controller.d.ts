import { AdminConfigDto } from './dto/adminConfig.dto';
import { AdminConfigService } from './adminConfig.service';
export declare class AdminConfigController {
    private readonly adminConfigService;
    constructor(adminConfigService: AdminConfigService);
    create(createAdminConfigDto: AdminConfigDto): Promise<import("../success-response").SuccessResponse>;
    get(): Promise<import("../success-response").SuccessResponse>;
    findOne(id: string): Promise<import("../success-response").SuccessResponse>;
    update(id: string, updateAdminConfigDto: AdminConfigDto): Promise<import("../success-response").SuccessResponse>;
    delete(id: string): Promise<import("../success-response").SuccessResponse>;
}
