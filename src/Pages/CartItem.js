import { Box, Button, Paper, TextField } from "@mui/material";
import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const CartItem = (props) => {
  const { id, productName, productPrice, productImg, size } = props.data;
  const { manuallyEditCount, cartProducts, addToCart, removeFromCart } =
    useContext(ShopContext);
  return (
    <Paper
      elevation={1}
      sx={{
        mb: 1,
        mt: 1,
        pl: 1,
        pt: 1,
        pb: 1,
        borderRadius: "10px",
        width: "450px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={productImg} width={100} height={100} />
      <Box>
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>₹{productPrice}</b>
        </p>
        <p>
          <b>{size}</b>
        </p>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          onClick={() => removeFromCart(id)}
          variant="contained"
          sx={{ width: "5px", height: "15px" }}
        >
          -
        </Button>
        <TextField
          id="outlined-number"
          onChange={(e) => manuallyEditCount(Number(e.target.value), id)}
          type="number"
          value={cartProducts[id]}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            maxheight: "1px",
            width: "85px",
            textAlign: "center",
            position: "relative",
            // top: "-20px",
          }}
        />
        <Button
          onClick={() => addToCart(id)}
          variant="contained"
          sx={{ width: "5px", height: "15px" }}
        >
          +
        </Button>
      </Box>
    </Paper>
  );
};

export default CartItem;
