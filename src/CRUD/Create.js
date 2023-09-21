import React, { useState } from "react";
import { useItemContext } from "../context/ItemContext";
import CreatePgImg from "../assets/upload_img_wht.png";
import "../stylesheet/Create.css";
import { useNavigate } from "react-router-dom";

function Create() {
  const { createItem } = useItemContext(); // Using the createItem function from the context
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name,
      description,
      price,
      image,
      address,
    };

    try {
      await createItem(newItem);
      navigate("/all"); // Navigate to "/all" page after creating the item
      window.location.reload(); // Refresh the page to see the updated list
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  const handleCancel = () => {
    navigate("/all"); // Redirect to "/all" if cancel button is clicked
  };

  return (
    <div className="splitScreen">
      <div className="leftCreate-container">
        <img src={CreatePgImg} alt=""></img>
      </div>
      <div className="rightCreate-container">
        <div className="c-form">
          <h2>Create a Support Listing</h2>
          <form onSubmit={handleSubmit} className="createForm">
            <label>
              Name{" "}
              <input
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Description{" "}
              <input
                className="input"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Price{" "}
              <input
                className="input"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Image{" "}
              <input
                className="input"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Address{" "}
              <input
                className="input"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
            <br />
            <button className="createBtn" type="submit">
              {" "}
              Create{" "}
            </button>
            <button type="button" onClick={handleCancel} className="cancel">
              {" "}
              Cancel{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
