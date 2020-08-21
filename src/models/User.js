import { usersRef } from './../api/firebase';

export default class User {
  constructor({ id, name, age, email, birthday, image, isSigned = true } = {}) {
    this.isSigned = isSigned;
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.birthday = birthday;
    this.image = image;
  }
  static async getUserFromDB(id) {
    const doc = await usersRef.doc(id).get();
    return new User(doc.data());
  }

  updateUserInfo() {
    if (!this.id) this.id= usersRef.doc().id;
    usersRef.doc(this.id).set(this);
  }
}