import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Luca',
      lastname: 'Fabioli',
      age: 20,
      province: 'Torino',
      email: 'hidran@gmail.com',
      gender: 'Female',
      fiscalcode: 'RSAHRN72M22Z444S',
    },
    {
      id: 2,
      name: 'Alice',
      lastname: 'De Paoli',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      gender: 'Female',
      age: 20
    },
    {
      id: 3,
      name: 'Sara',
      lastname: 'Cuccurella',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      gender: 'Female',
      age: 20
    },
    {
      id: 4,
      name: 'Pietro',
      lastname: 'Massari',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      gender: 'Male',
      age: 20
    }
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  deleteUser(user: User) {

    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
  updateUser(user: UserInterface) {
    const idx = this.users.findIndex(v => v.id === user.id);

    if (idx !== -1) {
      this.users[idx] = { ...user };
    }
  }
  createUser(user: UserInterface) {
    this.users.splice(0, 0, { ...user });
  }

}