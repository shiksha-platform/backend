import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../model/base.entity';

@Entity({ name: 'attendance' })
export class Attendance extends BaseEntity {

    @Column({ type: 'varchar' })
    schoolId: string;

    @Column({ type: 'varchar' })
    userId: string;   

    @Column({ type: 'varchar' })
    groupId: string; 

    @Column({ type: 'varchar', nullable: true })
    topicId: string;

    @Column({ type: 'varchar', nullable: true })
    eventId: string;

    @Column({ type: 'date' })
    date: Date;

    @Column({ type: 'varchar', length: 20 })
    attendance: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    remark: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    approved: string;    

    @Column({ type: 'varchar', length: 50, nullable: true })
    approvedBy: string;

   
}