import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'yusufborucu',
      password: '123456'
    },
    {
      userId: 2,
      username: 'test',
      password: 'test'
    }
  ];

  async findOne(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }
}
