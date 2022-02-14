import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../model/base.entity';

@Entity({ name: 'group' })
export class Group extends BaseEntity {

    @Column({ type: 'varchar', length: 300 })
    schoolId: string;

    @Column({ type: 'varchar', length: 300 })
    name: string;    

    @Column({ type: 'varchar', length: 300 })
    type: string;

    @Column({ type: 'varchar', length: 300 })
    status: string;
}
