import { Prisma } from '../../../generated/prisma/client';

export interface IUsersRepository {
  findById(id: string);

  findByEmail(email: string);

  findMany();

  create(data: Prisma.UserCreateInput);

  update(id: string, data: Prisma.UserUpdateInput);

  delete(id: string);
}
