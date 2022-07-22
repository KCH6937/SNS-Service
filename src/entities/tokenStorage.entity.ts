import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './users.entity';

@Entity({ name: 'TOKEN_STORAGE' })
export class TokenStorage extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'refresh_token' })
  refreshToken!: string;

  @Column()
  content!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @Column({ name: 'deleted_at', nullable: true, width: 6 })
  deletedAt: Date | null;

  // User(1) <-> Board(*)
  @OneToOne(type => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  user!: User;
}
