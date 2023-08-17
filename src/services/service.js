import { db } from "./firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "books");

export const add = (newElement) => {
  return addDoc(bookCollectionRef, newElement);
}

export const update = (id, updatedElement) => {
  const bookDoc = doc(db, "books", id);
  return updateDoc(bookDoc, updatedElement);
}

export const del = (id) => {
  const bookDoc = doc(db, "books", id);
  return deleteDoc(bookDoc);
}

export const getAll = (id) => {
  return getDocs(bookCollectionRef);
}

export const getById = (id) => {
  const bookDoc = doc(db, "books", id);
  return getDoc(bookDoc);
}
