import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'topic' })
export class Topic extends BaseEntity {

    @Column({ type: 'varchar' })
    schoolId: string;

    @Column({ type: 'varchar', length: 300 })
    name: string;    

    @Column({ type: 'varchar', length: 300 })
    category: string;

    @Column({ type: 'varchar', length: 300 })
    status: string;
}
