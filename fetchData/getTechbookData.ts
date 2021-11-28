import admin from '../firebase/nodeApp';

export const getTechbookData = async () => {
  // create db
  const db = admin.firestore();

  const techbookCollection = db.collection('techbooks');
  const techbookCollectionQuerySnapshot = await techbookCollection.get();

  let books = []
  techbookCollectionQuerySnapshot.forEach(doc => {
    books.push(doc.data());
  });

  return books;
};
