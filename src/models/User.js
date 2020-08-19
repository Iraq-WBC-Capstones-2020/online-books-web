import { usersRef } from './../api/firebase';

export default class User {
  constructor({ id, name, age, email, birthday, image } = {}) {
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
    usersRef.doc(this.id).set(this);
  }
}