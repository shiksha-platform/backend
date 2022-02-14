import { Repository } from 'typeorm';
import { AdminConfigDto } from './dto/adminConfig.dto';
import { AdminConfig } from './adminConfig.entity';
import { SuccessResponse } from '../success-response';
export declare class AdminConfigService {
    private readonly adminConfigRepository;
    [x: string]: any;
    private entityManager;
    constructor(adminConfigRepository: Repository<AdminConfig>);
    createAdminConfig(adminConfigDto: AdminConfigDto): Promise<SuccessResponse>;
    getAdminConfig(): Promise<SuccessResponse>;
    findAdminConfigById(adminConfigId: string): Promise<SuccessResponse>;
    updateAdminConfig(adminConfigId: string, updateAdminConfigDto: AdminConfigDto): Promise<SuccessResponse>;
    deleteAdminConfig(adminConfigId: string): Promise<SuccessResponse>;
}
