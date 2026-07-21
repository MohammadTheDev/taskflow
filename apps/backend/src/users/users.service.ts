import { Injectable } from '@nestjs/common';
// import { Prisma } from '../../generated/prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findById(id: string) {
    return this.usersRepository.findById(id);
  }

  async findByEmail(email: string) {
    return this.usersRepository.findByEmail(email);
  }

  async findAll() {
    return this.usersRepository.findMany();
  }

  async create(data: CreateUserDto) {
    return this.usersRepository.create(data);
  }

  async update(id: string, data: UpdateUserDto) {
    return this.usersRepository.update(id, data);
  }

  async delete(id: string) {
    return this.usersRepository.delete(id);
  }
}
