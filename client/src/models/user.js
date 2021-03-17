export default class User {
    constructor(name, surname, email, password, nif, phone,role="User") {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.password = password;
      this.nif = nif;
      this.phone = phone;
      this.role=role;
    }
  }