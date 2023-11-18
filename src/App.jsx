import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import YourProducts from "./Pages/YourProducts";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yourProducts" element={<YourProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
