import React, { useEffect } from "react";
import "../stylesheet/Supports.css";
import { useItemContext } from "../context/ItemContext";
import { Link } from "react-router-dom";

const Supports = () => {
  const { items, getAllItems } = useItemContext();

  useEffect(() => {
    if (items.length === 0) {
      getAllItems(); // Fetch items only if they haven't been fetched yet
    }
  }, [getAllItems, items.length]);

  return (
    <div className="supContainer">
      {items.map((item) => (
        <Link to={`/items/${item.id}`} className="itemLink" key={item.id}>
          <div className="supports animated-supports">
            <div className="left-s">
              <div className="name">
                <span>{item.name}</span>
              </div>
              <div className="price">
                <span>${item.price}</span>
              </div>
            </div>
            <img src={item.icon} alt="img" className="sImg" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Supports;
