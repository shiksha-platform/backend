import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../model/base.entity";

@Entity({ name: "attendance" })
export class Attendance extends BaseEntity {
  @Column({ type: "varchar", nullable: true })
  schoolId: string;

  @Column({ type: "varchar", nullable: true })
  userId: string;

  @Column({ type: "varchar", nullable: true })
  groupId: string;

  @Column({ type: "varchar", nullable: true })
  topicId: string;

  @Column({ type: "varchar", nullable: true })
  eventId: string;

  @Column({ type: "date", nullable: true })
  date: Date;

  @Column({ type: "varchar", length: 20, nullable: true })
  attendance: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  remark: string;

  @Column({ type: "varchar", length: 10, nullable: true })
  approved: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  approvedBy: string;

  @Column({ type: "real", nullable: true })
  latitude: string;

  @Column({ type: "real", nullable: true })
  longitude: string;

  @Column({ type: "text", nullable: true })
  image: string;
}
