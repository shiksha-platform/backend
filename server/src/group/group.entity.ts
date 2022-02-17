import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../model/base.entity';

@Entity({ name: 'group' })
export class Group extends BaseEntity {

    @Column({ type: 'varchar', length: 300, nullable: true })
    schoolId: string;

    @Column({ type: 'varchar', length: 300, nullable: true })
    name: string;    

    @Column({ type: 'varchar', length: 300, nullable: true })
    type: string;

    @Column({ type: 'varchar', length: 300, nullable: true })
    status: string;
}
