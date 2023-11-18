import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { productCount } = useSelector((state) => state.products);
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-14">
      <div className="flex justify-between items-center fixed z-50 w-full h-14 bg-gray-700 shadow-sm px-6 cursor-pointer">
        <h1
          className="text-[25px] font-bold font-mono"
          onClick={() => navigate("/")}>
          E-Store{" "}
        </h1>
        <div className="relative" onClick={() => navigate("/yourProducts")}>
          <FaCartShopping size={30} />
          <span className="absolute bg-emerald-400 rounded-full px-[5px] text-center text-[14px] -top-1 -right-1">
            {productCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
