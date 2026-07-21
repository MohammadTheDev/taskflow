// import { Prisma } from '../../../generated/prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface IUsersRepository {
  findById(id: string);

  findByEmail(email: string);

  findMany();

  create(data: CreateUserDto);

  update(id: string, data: UpdateUserDto);

  delete(id: string);
}
