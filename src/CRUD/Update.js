import React, { useState, useEffect } from "react";
import { useItemContext } from "../context/ItemContext";
import { useParams, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import "../stylesheet/Update.css";

function Update({ onCancel, onEdit }) {
  const { user } = useUserContext();
  const { getItem, updateItem } = useItemContext(); // Custom hook to access context functions
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    console.log(id);
    getItem(id)
      .then((itemData) => {
        const { name, description, price, image, address, user_id } = itemData;
        if (user_id !== user.id) {
          alert("You are not the owner");
          navigate("/all"); // Redirect to /all
        } else {
          setName(name);
          setDescription(description);
          setPrice(price);
          setImage(image);
          setAddress(address);
        }
      })
      .catch((error) => {
        console.error("Error fetching item data:", error);
      });
  }, [getItem, id, user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedItem = {
      name,
      description,
      price,
      image,
      address,
    };

    try {
      await updateItem(id, updatedItem);
      onEdit();
      navigate(`/items/${id}`); // Redirect back to Read.js after update
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className="update-center">
      <div className="update-container">
        {/* <h2>Edit Item</h2> */}
        <form onSubmit={handleSubmit}>
          <label className="update-label">Name:</label>
          <input
            className="update-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="update-label">Description:</label>
          <input
            className="update-input"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label className="update-label">Price:</label>
          <input
            className="update-input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label className="update-label">Image:</label>
          <input
            className="update-input"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <label className="update-label">Address:</label>
          <input
            className="update-input"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="update-button-container">
            <button className="update-button" type="submit">
              Save
            </button>
            <button
              className="update-button cancel-button"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className="bg-wallpaper"></div>
    </div>
  );
}

export default Update;
