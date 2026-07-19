import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
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

  async create(data: Prisma.UserCreateInput) {
    return this.usersRepository.create(data);
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    return this.usersRepository.update(id, data);
  }

  async delete(id: string) {
    return this.usersRepository.delete(id);
  }
}
