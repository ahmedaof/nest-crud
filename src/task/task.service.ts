import { Task } from './task.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private repo:Repository<Task>){}
  create(createTaskDto: CreateTaskDto , id: number) {

    
    let task = this.repo.create(createTaskDto)
    task.userId = id;
    return this.repo.save(task);
  }

  findAll() {
    return `This action returns all task`;
  }

  async findOne(id: number) {
    let task = await this.repo.findOne({ where: { id } ,
      relations: ['user']
    })
    return task.user;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
