import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../model/base.entity';

@Entity({ name: 'adminConfig' })
export class AdminConfig extends BaseEntity {

    @Column({ type: 'varchar', length: 300, nullable: true })
    module: string;

    @Column({ type: 'varchar', length: 300, nullable: true })
    key: string;

    @Column({ type: 'varchar', length: 300, nullable: true })
    value: string;    

    @Column({ type: 'varchar', length: 300, nullable: true })
    context : string; // (state / school)

    @Column({ type: 'uuid', nullable: true })
    contextId	: string; // (schoolId in case of school)

    @Column({ type: 'boolean', nullable: true })
    canOverride: boolean;    

}
