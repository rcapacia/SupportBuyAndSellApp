import React, { useEffect } from "react";
import { useItemContext } from "../context/ItemContext";
import "../stylesheet/ItemList.css";
import Supports from "./Supports";

const ItemList = () => {
  const { items, getAllItems } = useItemContext();

  useEffect(() => {
    if (items.length === 0) {
      getAllItems(); // Fetch items only if they haven't been fetched yet
    }
  }, [getAllItems, items.length]);

  return (
    <>
      <Supports />
    </>
  );
};

export default ItemList;
