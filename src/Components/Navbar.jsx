import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" sx={{ background: "#00563B" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            sx={{
              letterSpacing: "1px",
              fontFamily: "serif",
              paddingBlockEnd: "1px",
            }}
          >
            <img
              src="./Components/popcorn-picture.jpg"
              sx={{ position: "absolute", padding: "10px" }}
            />
            Popcorn-Picture
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link style={{ color: "white", textDecoration: "none" }} to="/home">
                Home
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link style={{ color: "white", textDecoration: "none" }} to="/favourites">
                Favourites
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link style={{ color: "white", textDecoration: "none" }} to="/trending">
                Trending
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link style={{ color: "white", textDecoration: "none" }} to="/mostwatched">
                Most Watched
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
