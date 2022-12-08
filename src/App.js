import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from "./components/Blog";

function App() {
  return (
          <UserAuthContextProvider>
            <Routes>
            <Route path="/" element={<Login />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Blog"
                element={
                  <ProtectedRoute>
                    <Blog />
                  </ProtectedRoute>
                }
              />
            
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
  );
}

export default App;
