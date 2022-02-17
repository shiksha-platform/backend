import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../model/base.entity';

@Entity({ name: 'holiday' })
export class Holiday extends BaseEntity {

    @Column({ type: 'timestamptz', nullable: true })
    date: string;

    @Column({ type: 'varchar', length: 300, nullable: true })
    remark: string;

    @Column({ type: 'varchar', nullable: true })
    year: string;    

    @Column({ type: 'varchar', length: 300, nullable: true })
    context : string; // (state / school)

    @Column({ type: 'varchar', nullable: true })
    contextId: string; // (schoolId in case of school)
}
