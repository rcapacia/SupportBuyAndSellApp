import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";
import "../stylesheet/UserProfile.css";

const UserProfile = () => {
  const { user } = useUserContext();
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3001/items?user_id=${user.id}`)
        .then((response) => {
          setUserItems(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user's items:", error);
        });
    }
  }, [user]);

  return (
    <div className="user-profile-container">
      <h1>
        Support <small>is your one stop shop for supporting others...</small>
      </h1>
      <div className="profile-section">
        <div class="profile-banner">
          <img src="https://unsplash.it/975/300" alt="Profile banner" />
        </div>
        <div class="profile-picture">
          <img
            src="http://unsplash.it/150/150"
            alt="Profile Image"
            className="profile-img"
          />
        </div>
        <div class="profile-stats">
          <ul>
            <li>
              1000 <span>Supports</span>
            </li>
            <li>
              1,354 <span>Followers</span>
            </li>
            <li>
              32 <span>Following</span>
            </li>
            <li>
              324 <span>Supported</span>
            </li>
          </ul>
        </div>
        <section className="user-section">
          {user ? (
            <div>
              <h2 className="profile-name">
                <strong></strong> {user.fullName}
              </h2>
              <Link to="/create" className="create-button">
                Create Support
              </Link>
              <div className="created-section">
                <h3>Your Created Items:</h3>
                <div className="supContainer-profile">
                  {userItems && userItems.length > 0 ? (
                    <>
                      {userItems.map((item) => (
                        <Link to={`/items/${item.id}`} key={item.id}>
                          <div className="items-container">
                            <div className="left-s">
                              <div className="name">
                                <span>{item.name}</span>
                              </div>
                              <span>${item.price}</span>
                            </div>
                            <img src={item.icon} alt="img" className="sImg" />
                          </div>
                        </Link>
                      ))}
                    </>
                  ) : (
                    <p>You haven't created any items yet.</p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p>Please sign in to view your profile.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
