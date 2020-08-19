import { booksRef } from './../api/firebase';
import Author from "./Author";
export default class Book {
    constructor({ id, name, type, price, dis_count, cover, have_audio, audio_ref, author_id, ref, tags } = {}) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.dis_count = dis_count;
        this.cover = cover;
        this.have_audio = have_audio;
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
    updateBookInfo() {
        booksRef.doc(this.id).set(this);
    }
}

