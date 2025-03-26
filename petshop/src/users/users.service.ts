import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { create } from 'domain';

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}


    create(createUserDto: CreateUserDto) {
        const user = this.usersRepository.create(createUserDto)
        return this.usersRepository.save(user);
    }

    findAll() {
        return this.usersRepository.find();
      }
    
    findOne(id: number) {
        return this.usersRepository.findOne({ where: { id } });
    }
    
    async update(id: number, updateUserDto: UpdateUserDto) {
        await this.usersRepository.update(id, updateUserDto);
        return this.findOne(id);
    }
    
    remove(id: number) {
       return this.usersRepository.delete(id);
    }
}