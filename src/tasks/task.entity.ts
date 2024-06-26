import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn }  from 'typeorm'
import { TasksStatus } from './task.model';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  status: TasksStatus

}