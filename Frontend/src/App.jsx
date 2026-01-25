import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";

import Navbar from "./Navbar";
import Home from "./Home";
import Recipes from "./Recipes";
import Categories from "./Categories";
import Contact from "./Contact";
import Cart from "./Cart";
import Qr from "./Qr";
import PageNOTFOUND from "./PageNOTFOUND";
import Login from "./LoginSignup";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />

          {/* Protected routes */}
          <Route
            path="/Home"
            element={
              <ProtectedRoute>
                <Navbar />
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Categories"
            element={
              <ProtectedRoute>
                <Navbar />
                <Categories />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Recipes"
            element={
              <ProtectedRoute>
                <Navbar />
                <Recipes />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Contact"
            element={
              <ProtectedRoute>
                <Navbar />
                <Contact />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Cart"
            element={
              <ProtectedRoute>
                <Navbar />
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Qr"
            element={
              <ProtectedRoute>
                <Navbar />
                <Qr />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<PageNOTFOUND />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
