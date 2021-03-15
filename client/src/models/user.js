export default class User {
    constructor(name, surname, email, password, nif, phone,router="No") {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.password = password;
      this.router = router;
      this.nif = nif;
      this.phone = phone
    }
  }