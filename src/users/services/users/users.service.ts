import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Anwar', email: 'anwar@gmail.com' },
    { username: 'Rukz', email: 'rukz@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(){
    
  }
}
