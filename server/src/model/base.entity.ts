import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP(6)" })
    createdOn: Date;

    @Column({ type: 'varchar', nullable: true })
    createdBy: string;

    @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP(6)" })
    updatedOn: Date;

    @Column({ type: 'varchar', nullable: true })
    updatedBy: string;
}