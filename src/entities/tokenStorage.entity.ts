import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './users.entity';

@Entity({ name: 'TOKEN_STORAGE' })
export class TokenStorage extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'refresh_token' })
  refreshToken!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @Column({ name: 'expired_at', nullable: true, width: 6 })
  expiredAt: Date | null;

  // User(1) <-> Board(*)
  @OneToOne(type => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
