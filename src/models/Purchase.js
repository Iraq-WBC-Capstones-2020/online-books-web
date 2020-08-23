import { purchasesRef } from './../api/firebase';

export default class Purchase {
  constructor({ id, user_id, book_id, price, time } = {}) {
    this.id = id;
    this.user_id = user_id;
    this.book_id = book_id;
    this.price = price;
    this.time = time;
  }

  async getPurchasesForUser(id) {
    const querySnapshot = await purchasesRef.where('user_id', '==', id).get();
    const purchases = querySnapshot.docs.map(
      (purchase) => new Purchase(purchase.data())
    );
    return purchases;
  }
  static async getPurchases() {
    const documentData = await purchasesRef.get();
    const purchases = documentData.docs.map(
      (purchase) => new Purchase(purchase.data())
    );
    return purchases;
  }
  updatePurchaseInfo() {
    if (!this.id) this.id = purchasesRef.doc().id;
    purchasesRef.doc(this.id).set({ ...this });
  }
}
