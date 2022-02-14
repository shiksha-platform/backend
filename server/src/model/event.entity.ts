import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'event' })
export class Event extends BaseEntity {

    @Column({ type: 'varchar' })
    schoolId: string;

    @Column({ type: 'varchar', length: 300 })
    name: string;    

    @Column({ type: 'timestamptz' })
    start: Date;

    @Column({ type: 'timestamptz' })
    end: Date;

    @Column({ type: 'boolean' })
    recurring: boolean;

    @Column({ type: 'varchar', length: 300 })
    recurringFrequency: string;    

    @Column({ type: 'varchar' })
    groupId: string;

    @Column({ type: 'varchar' })
    topicId: string;

    @Column({ type: 'varchar' })
    creatorId: string;

    @Column({ type: 'varchar' })
    primaryUserId: string;

    @Column({ type: 'varchar', length: 300 })
    status: string;
}
