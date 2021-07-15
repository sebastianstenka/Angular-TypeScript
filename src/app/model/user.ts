import { Address } from "./address";
import { Company } from "./company";

export class User {
  id: number;
  name: string;
  phone: string;
  website: string;
  email: string;
  address: Address;
  company: Company;
}
