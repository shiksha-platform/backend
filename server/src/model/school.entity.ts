import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'school' })
export class School extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  name: string;
}