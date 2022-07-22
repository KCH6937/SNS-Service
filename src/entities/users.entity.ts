import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Board } from './boards.entity';
import { TokenStorage } from './tokenStorage.entity';

@Entity({ name: 'USER' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @Column({ name: 'deleted_at', nullable: true, width: 6 })
  deletedAt: Date | null;

  // User(1) <-> Application(*)
  @OneToMany(type => Board, board => board.user)
  boards!: Board[];
}
