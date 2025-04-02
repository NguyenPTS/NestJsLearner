import { Repository } from 'typeorm';
import { Task } from './task.entity';
export declare class TaskRepository extends Repository<Task> {
    findByTitle(title: string): Promise<Task[]>;
}
