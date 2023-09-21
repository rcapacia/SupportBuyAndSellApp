import React from "react";
import logo from "../assets/logo.png";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function NavBar() {
  const { user, logoutUser } = useUserContext();

  return (
    <div>
      {/* leftSide */}
      <nav className="nav">
        <CustomLink to="/">
          <img src={logo} alt="logo1" className="logo"></img>
        </CustomLink>

        {/* center */}
        <div>
          <form class="searchform cf">
            <input type="text" placeholder="Find more to support!" />
            <button type="submit" className="search">
              Search
            </button>
          </form>

          {/* rightSide */}
        </div>
        <ul>
          <CustomLink to="/">Home</CustomLink>|
          <CustomLink to="/about">About Us</CustomLink>|
          <CustomLink to="/help">Help</CustomLink>
          <br></br>
          {user ? (
            <>
              <Link to="/user-profile">
                <p className="welcome-user">Welcome, {user.fullName}</p>
              </Link>
              <button onClick={logoutUser} class="btn btn-primary">
                Logout
              </button>
            </>
          ) : (
            <CustomLink to="/sign-up">
              <div className="user">
                <FaUserCircle className="userIcon" />
                <p>Sign Up</p>
              </div>
            </CustomLink>
          )}
          <CustomLink to="/cart">
            <PiShoppingCartBold />
          </CustomLink>
        </ul>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
