import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: user[] = [
    {
      id: 1,
      name: 'handel',
      email: 'handel@gmail.com',
      password: 'jht5ou',
    },
    {
      id: 2,
      name: 'handel',
      email: 'handel@gmail.com',
      password: 'jht5ou',
    },
    {
      id: 3,
      name: 'ebi',
      email: 'handel@gmail.com',
      password: 'jht5ou',
    },
    {
      id: 4,
      name: 'joseph',
      email: 'handel@gmail.com',
      password: 'jht5ou',
    },
    {
      id: 5,
      name: 'peter',
      email: 'handel@gmail.com',
      password: 'jht5ou',
    },
  ];

  findAll() {
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException('user not found ');

    return user;
  }
  create(user: user) {
    const id = [...this.users].sort((a, b) => b.id - a.id)[0].id + 1;
    const newUser = { id, ...user };
    this.users = [...this.users, newUser];
    return this.users;
  }
  update(id: number, userUpdate: user) {
    return this.users.map((user) =>
      user.id === id ? { ...user, ...userUpdate } : { ...user },
    );
  }
  delete(id: number) {
    return this.users.filter((user) => user.id != id);
  }
}
