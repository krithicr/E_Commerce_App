import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { ShopContext } from "../Context/ShopContext";


export default function Products({
  id,
  size,
  productName,
  productPrice,
  productImg,
}) {
  const { addToCart, cartProducts, addSize } = React.useContext(ShopContext);
  

  React.useEffect(() => {
    console.log(size);
  }, [id]);

  const totalCount = cartProducts[id];

  return (
    <Paper elevation={1} sx={{ mb: 1, mr: 1, borderRadius: "5px" }}>
      <Grid
        item
        xs4
        sx={{
          pl: 0,
          pt: 0,
          mt: 2,
          height: 400,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            maxWidth: 360,
            height: "100%",
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            padding: 0,
          }}
        >
          <Box sx={{ my: 1, mx: 1 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h6" component="div">
                  {productName}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  ₹{productPrice}
                </Typography>
              </Grid>
            </Grid>
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 267 },
                maxWidth: { xs: 350, md: 450 },
                objectFit: "contain",
              }}
              alt="The house from the offer."
              src={productImg}
            />
          </Box>
          <Divider variant="middle" />
          <Box sx={{ m: 1 }}>
            <Typography gutterBottom variant="body1">
              Select Size
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip
                onClick={() => addSize("S", id)}
                color={size === "S" ? "primary" : "default"}
                label="S"
              />
              <Chip
                onClick={() => addSize("M", id)}
                color={size === "M" ? "primary" : "default"}
                label="M"
              />
              <Chip
                onClick={() => addSize("L", id)}
                color={size === "L" ? "primary" : "default"}
                label="L"
              />
              <Chip
                onClick={() => addSize("XL", id)}
                color={size === "XL" ? "primary" : "default"}
                label="XL"
              />
            </Stack>
          </Box>
          <Box sx={{ mt: 1, ml: 1, mb: 2, pt: 0, pb: 0 }}>
            <Button onClick={() => addToCart(id)}>
              Add to cart{totalCount > 0 && <>({totalCount})</>}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Paper>
  );
}
