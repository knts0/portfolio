import admin from '../firebase/nodeApp';

export const getTechbookList = async () => {
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

export const getTechbook = async (id) => {
  // create db
  const db = admin.firestore();

  const techbookCollection = db.collection('techbooks');
  const techbookCollectionQuerySnapshot = await techbookCollection.doc(id).get();

  return techbookCollectionQuerySnapshot.data();
};
