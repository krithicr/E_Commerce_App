import { Box, Container, Grid } from "@mui/material";
import "./App.css";
import Header from "./Components/Header";
import Products from "./Pages/Products";
import Data from "./ClothsData.json";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import React from "react";
import ShopContextProvider from "./Context/ShopContext";

function App() {
  function filterShirts(item) {
    return item.type === "tshirts";
  }
  function filterTShirts(item) {
    return item.type === "shirts";
  }
  function filterJoggers(item) {
    return item.type === "joggers";
  }
  const { size } = Data;
  React.useEffect(() => {
    console.log(Data);
  }, [Data.size]);

  return (
    <ShopContextProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          // height: "100vh",
        }}
      >
        <Header sx={{ mb: 2, mr: 2 }} enableStickyHeader />

        <Container
          sx={{
            width: { xs: 1, md: 200, lg: 1200 },
            mt: 2,
            paddingX: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Grid
                  paddingX={0}
                  marginTop={0}
                  container
                  spacing={0.5}
                  sx={{
                    height: "100%",
                    width: "100%",
                    placeContent: "center",
                    marginX: "auto",
                  }}
                >
                  {Data.filter(filterShirts).map((item, index) => (
                    <Products
                      key={index}
                      id={item.id}
                      size={item.size}
                      productName={item.productName}
                      productPrice={item.productPrice}
                      productImg={item.productImg}
                    />
                  ))}
                </Grid>
              }
            />
            <Route
              path="/shirts"
              element={
                <Grid
                  paddingX={0}
                  marginTop={0}
                  container
                  spacing={0.5}
                  sx={{
                    height: "100%",
                    width: "100%",
                    placeContent: "center",
                    marginX: "auto",
                  }}
                >
                  {Data.filter(filterTShirts).map((item, index) => (
                    <Products
                      key={index}
                      id={item.id}
                      size={item.size}
                      productName={item.productName}
                      productPrice={item.productPrice}
                      productImg={item.productImg}
                    />
                  ))}
                </Grid>
              }
            />
            <Route
              path="/joggers"
              element={
                <Grid
                  paddingX={0}
                  marginTop={0}
                  container
                  spacing={0.5}
                  sx={{
                    height: "100%",
                    width: "100%",
                    placeContent: "center",
                    marginX: "auto",
                  }}
                >
                  {Data.filter(filterJoggers).map((item, index) => (
                    <Products
                      key={index}
                      id={item.id}
                      size={item.size}
                      productName={item.productName}
                      productPrice={item.productPrice}
                      productImg={item.productImg}
                    />
                  ))}
                </Grid>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </Box>
    </ShopContextProvider>
  );
}

export default App;
