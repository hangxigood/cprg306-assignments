import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, deleteDoc } from "firebase/firestore";

// Function to get items for a specific user
export const getItems = async (userId) => {
    try {
      const items = [];
      const q = query(collection(db, `users/${userId}/items`));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      return items;
    } catch (error) {
      console.error("Error getting items: ", error);
      throw new Error("Failed to get items");
    }
  }
  
  // Function to add an item for a specific user
  export const addItem = async (userId, item) => {
    try {
      const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
      return docRef.id;
    } catch (error) {
      console.error("Error adding item: ", error);
      throw new Error("Failed to add item");
    }
  }

  // Function to delete an item for a specific user
  export const deleteItem = async (userId, itemId) => {
    try {
      await deleteDoc(doc(db, `users/${userId}/items/${itemId}`));
    } catch (error) {
      console.error("Error deleting item: ", error);
      throw new Error("Failed to delete item");
    }
  }