import React, { useEffect } from "react";
import { useItemContext } from "../context/ItemContext";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

function Delete({ id }) {
  const { getItem, deleteItem } = useItemContext();
  const navigate = useNavigate();

  useEffect(() => {
    getItem(id)
      .then((itemData) => {
        console.log("Item to delete:", itemData); // Display the item details for confirmation
      })
      .catch((error) => {
        console.error("Error fetching item data:", error);
      });
  }, [getItem, id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteItem(id);
        navigate("/all"); // Redirect to the list of items after deletion
        window.location.reload(); // Refresh the page to see the updated list
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  return (
    <div>
      <MdDeleteOutline onClick={handleDelete} />
    </div>
  );
}

export default Delete;
