import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Header from "./components/Header";
import SignIn from "./SignIn";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Footer from "./components/Footer";
import Dashboard from "./Dashboard";
import Users from "./Users";
import UpdateUser from "./components/UpdateUser";
import Product from "./Product";
import Cart from "./Cart";
import Shop from "./Shop";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Register" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Users" element={<Users />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Users/:id" element={<UpdateUser />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
