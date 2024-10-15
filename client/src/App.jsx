import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/custom/navbar/navbar";
import Main from "./components/custom/middle/main";
import Footer from "./components/custom/footer/footer";
import Signup from "./components/custom/signup/signup";
import Signin from "./components/custom/signin/signin";
import Category from "./components/custom/category/category";
import Profile from "./components/custom/profile/profile";
import SearchPage from "./components/custom/searchPage/searchPage";
import Cart from "./components/custom/cart/cart";
import SingleProductPage from "./components/custom/singleItem/singleItem";
import { AuthProvider } from "./context/authContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      {/* Uncomment ProductProvider if needed */}
      {/* <ProductProvider> */}
        <Router>
          <div className="min-h-screen w-full flex flex-col">
            <Navbar />
            <div className="text-center py-4 w-full">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/category" element={<Category />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/singleProduct" element={<SingleProductPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/searchPage" element={<SearchPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      {/* </ProductProvider> */}
    </AuthProvider>
  );
}

export default App;
