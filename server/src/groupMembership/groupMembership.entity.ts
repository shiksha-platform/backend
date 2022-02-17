import { Group } from '../group/group.entity';
import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './../model/base.entity';


@Entity({ name: 'groupMembership' })
export class GroupMembership extends BaseEntity {

    @Column({ type: 'varchar' })
    schoolId: string;

    @Column({name: 'groupId', })
    @ManyToOne(type => Group, group => group.id)
    group: Group;   

    @Column({ type: 'varchar' })
    userId: string;

    @Column({ type: 'varchar', length: 300 })
    role: string;
}
