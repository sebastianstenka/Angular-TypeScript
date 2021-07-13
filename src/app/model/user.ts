export class User {
  id: number;
  name: string;
  phone: string;
  website: string;
  email: string;

  constructor(id: number, name: string, phone: string, website: string, email: string) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.website = website;
    this.email = email;
  }
}
