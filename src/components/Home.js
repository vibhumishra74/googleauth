import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Header from "./Header";
import { Link } from "react-router-dom";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        <h1> Welcome {user.displayName}</h1><br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      <p>Please click on  <Link to="/Blog">Blog</Link> to see the Expected ui</p>
    </>
  );
};

export default Home;
