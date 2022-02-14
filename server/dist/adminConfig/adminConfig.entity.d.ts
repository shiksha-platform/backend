import { BaseEntity } from '../model/base.entity';
export declare class AdminConfig extends BaseEntity {
    module: string;
    key: string;
    value: string;
    context: string;
    contextId: string;
    canOverride: boolean;
}
