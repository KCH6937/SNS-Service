import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './users.entity';

@Entity({ name: 'BOARD' })
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ width: 500, type: 'text' })
  content!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @CreateDateColumn({ length: 2, default: 0 })
  rate!: number;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  // User(1) <-> Board(*)
  @ManyToOne(type => User, user => user.boards)
  @JoinColumn({ name: 'user_id' })
  userId!: User['id'];
}
