import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useItemContext } from "../context/ItemContext";
import { useUserContext } from "../context/UserContext";
import Delete from "./Delete"; // Import the Delete component
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"; // Import GoogleMap, LoadScript, and Marker
import fetchCoordinates from "../components/ItemCoords";
import "../stylesheet/Read.css";

import { GrFormEdit } from "react-icons/gr";

function Read() {
  const { user } = useUserContext();
  const { getItem } = useItemContext();
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    getItem(id)
      .then((itemData) => {
        setItem(itemData);
        fetchCoordinates(itemData.address)
          .then((coords) => {
            setCoordinates(coords);
          })
          .catch((error) => {
            console.error("Error fetching coordinates:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching item data:", error);
      });
  }, [getItem, id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  const isOwner = user && item.user_id === user.id;

  return (
    <div className="main-wrapper">
      <div className="main-container">
        <div className="item-div">
          <div className="item-div-left">
            <div className="img-container">
              <img src={item.icon} alt="img" />
            </div>
          </div>
          <div className="item-div-right">
            <span className="item-name">{item.name}</span>
            <span className="item-price">{item.price}</span>
            <p class="item-description">
              {item.description}Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Vitae animi ad minima veritatis dolore.
              Architecto facere dignissimos voluptate fugit ratione molestias
              quis quidem exercitationem voluptas.
            </p>
            <div class="btn-groups">
              <button type="button" class="add-cart-btn">
                <i class="fas fa-shopping-cart"></i>add to cart
              </button>
              <button type="button" class="buy-now-btn">
                <i class="fas fa-wallet"></i>buy now
              </button>
            </div>
            <br />
            {/* <p>Address: {item.address}</p> */}
            {/* Render the Google Map */}
            <div className="map">
              <LoadScript googleMapsApiKey="AIzaSyBU0ZdYhzfCYD0SJGYK72kDdw8xXFI2RK8">
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "200px" }}
                  center={coordinates || { lat: 0, lng: 0 }}
                  zoom={15}
                >
                  {coordinates && <Marker position={coordinates} />}
                </GoogleMap>
              </LoadScript>
            </div>
            <div className="edit-del-container">
              <Link to={`/update/${id}`}>
                <GrFormEdit className="edit-div" />
              </Link>

              <div className="delete-div">{isOwner && <Delete id={id} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
