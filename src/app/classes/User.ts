import { UserInterface } from './../interfaces/user';
export class User implements UserInterface {
  id: number;
  name: string;
  lastname: string;
  email: string;
  fiscalcode: string;
  province: string;
  gender: string;
  age: number;
  constructor() {
    this.id = 0;
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.fiscalcode = '';
    this.province = '';
    this.gender = '';
    this.age = 0;
  }
}