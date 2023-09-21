import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Items() {
  let [item, setItem] = useState("unknown");

  useEffect(() => {
    async function getItem() {
      const response = await axios.get("http://localhost:3001/items/1");
      setItem(response.data.item);
    }
    getItem();
  }, []);
  return <p>Item: {item}</p>;
}

export default Items;
