import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const getAllItems = async () => {
    try {
      const response = await axios.get("http://localhost:3001/items");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const getItem = async (id) => {
    try {
      console.log("Fetching item data for id:", id); // Debugging line
      const response = await axios.get(`http://localhost:3001/items/${id}`);
      console.log("Response data:", response.data); // Debugging line
      return response.data;
    } catch (error) {
      console.error("Error fetching item data:", error);
    }
  };

  const updateItem = async (id, updatedItem) => {
    try {
      await axios.patch(`http://localhost:3001/items/${id}`, updatedItem);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const createItem = async (newItem) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      const response = await axios.post("http://localhost:3001/items", {
        ...newItem,
        user_id: user.id,
      });
      setItems([...items, response.data]);
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/items/${id}`);
      setItems(items.filter((item) => item.id !== id)); // Updates the local state after deletion
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const getItemsByUserId = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/items/user/${userId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user's items:", error);
    }
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        getAllItems,
        getItem,
        updateItem,
        createItem,
        deleteItem,
        getItemsByUserId,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  return useContext(ItemContext);
};
