export default class User {
    constructor(name, surname, email, password, nif, phone_number,role="User") {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.password = password;
      this.nif = nif;
      this.phone_number = phone_number;
      this.role=role;
    }
  }