import { booksRef } from './../api/firebase';
import Author from "./Author";
export default class Book {
    constructor({ id, name, type, price, dis_count, cover, have_audio, description, audio_ref, author_id, ref, tags } = {}) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.dis_count = dis_count;
        this.cover = cover;
        this.have_audio = have_audio;
        this.description = description;
        this.audio_ref = audio_ref;
        this.author_id = author_id;
        this.ref = ref;
        this.tags = tags;
    }
    async getAuthor() {
        return await Author.getAuthorFromDB(author_id);
    }
    static async getBookFromDB(id) {
        const doc = await booksRef.doc(id).get();
        return new Book(doc.data());
    }
  async addBookToCart(user_id) {
    await usersRef
      .doc(user_id)
      .collection('cart')
      .doc(this.id)
      .set({ ...this });
  }
    static async getBooks() {
        const documentData = await booksRef.get();
        const books = documentData.docs.map((book) => new Book(book.data()));
        return books;
    }
    updateBookInfo() {
        if (!this.id) this.id = booksRef.doc().id;
        booksRef.doc(this.id).set(this);
    }
}
