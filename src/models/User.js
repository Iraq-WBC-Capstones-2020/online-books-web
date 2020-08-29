import { usersRef } from './../api/firebase';
import Book from './Book';

export default class User {
  constructor({
    id,
    fullName,
    age,
    email,
    birthday,
    image,
    isSigned = true,
  } = {}) {
    this.isSigned = isSigned;
    this.id = id;
    this.fullName = fullName;
    this.age = age;
    this.email = email;
    this.birthday = birthday;
    this.image = image;
  }
  static async getUserFromDB(id) {
    const doc = await usersRef.doc(id).get();
    return new User(doc.data());
  }
  async getBooksInCart() {
    const books = await usersRef.doc(this.id).collection('cart').get();
    return books.docs.map((book) => new Book(book));
  }
  updateUserInfo() {
    if (!this.id) this.id = usersRef.doc().id;
    usersRef.doc(this.id).set({ ...this });
  }
}
