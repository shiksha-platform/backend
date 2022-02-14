import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../model/base.entity';

@Entity({ name: 'holiday' })
export class Holiday extends BaseEntity {

    @Column({ type: 'timestamptz' })
    date: string;

    @Column({ type: 'varchar', length: 300 })
    remark: string;

    @Column({ type: 'varchar' })
    year: string;    

    @Column({ type: 'varchar', length: 300 })
    context : string; // (state / school)

    @Column({ type: 'varchar' })
    contextId: string; // (schoolId in case of school)
}