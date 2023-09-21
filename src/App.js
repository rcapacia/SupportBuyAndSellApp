import React from "react";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Update from "./CRUD/Update";
import Create from "./CRUD/Create";
import { ItemContextProvider } from "./context/ItemContext";
import { UserContextProvider } from "./context/UserContext";
import Signup from "./components/SignUp";
import SignIn from "./components/SignIn";
import Read from "./CRUD/Read";
import ItemList from "./components/ItemList";
import UserProfile from "./components/UserProfile";

function App() {
  const handleCancel = () => {
    console.log("Cancel button clicked");
  };
  const handleEdit = () => {
    console.log("Edit button clicked");
  };

  return (
    <UserContextProvider>
      <ItemContextProvider>
        <>
          <Navbar />
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/all" element={<ItemList />} />

              <Route path="/items/:id" element={<Read />} />
              <Route
                path="/create"
                element={<Create onCancel={handleCancel} />}
              />
              <Route
                path="/update/:id"
                element={<Update onCancel={handleCancel} onEdit={handleEdit} />}
              />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </>
      </ItemContextProvider>
    </UserContextProvider>
  );
}

export default App;
