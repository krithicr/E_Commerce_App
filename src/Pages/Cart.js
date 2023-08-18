import React, { useContext } from "react";
import Data from "../ClothsData.json";
import CartItem from "./CartItem";
import { ShopContext } from "../Context/ShopContext";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartProducts, cartTotalAmount } = useContext(ShopContext);
  const totalAmount = cartTotalAmount();
  const navigate = useNavigate();
  return (
    <Box sx={{ textAlign: "center", height: "max-content", mb: 2 }}>
      <h1>Your Cart Items</h1>
      {Data.map((product) => {
        if (cartProducts[product.id] !== 0) {
          return <CartItem data={product} />;
        }
      })}
      {totalAmount > 0 ? (
        <p>Subtotal:₹{totalAmount}</p>
      ) : (
        <p>Your Cart is Empty</p>
      )}
      <Button variant="contained" onClick={() => navigate("/")}>
        Continue Shopping
      </Button>
    </Box>
  );
};

export default Cart;
