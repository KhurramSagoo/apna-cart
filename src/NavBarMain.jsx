import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { blueGrey, teal } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = ["Home", "Cart", "About", "Add Product"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBarMain() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getWork = (index) => {
    const selectedSetting = settings[index];
    // console.log(selectedSetting);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: blueGrey[700],
          //   width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <StoreIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                fontSize: "2rem",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              // href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                fontFamily: "Montserrat",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "2rem",
                marginRight: "auto",
              }}
              onClick={() => navigate("/")}
            >
              APNA CART
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                margin: "0",
                padding: "0",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                  },
                }}
              >
                {/* {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}
                <MenuItem
                  sx={{
                    bgcolor: blueGrey[700],
                    color: "white",
                    "&:hover": {
                      bgcolor: blueGrey[900],
                      border: "none",
                    },
                  }}
                  onClick={() => navigate("/")}
                >
                  <Typography textAlign="center" style={{}}>
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{
                    bgcolor: blueGrey[700],
                    color: "white",
                    "&:hover": {
                      bgcolor: blueGrey[900],
                      border: "none",
                    },
                  }}
                  onClick={() => navigate("/cart")}
                >
                  <Typography textAlign="center">Cart</Typography>
                </MenuItem>
                <MenuItem
                  sx={{
                    bgcolor: blueGrey[700],
                    color: "white",
                    "&:hover": {
                      bgcolor: blueGrey[900],
                      border: "none",
                    },
                  }}
                  onClick={() => navigate("/about")}
                >
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem
                  sx={{
                    bgcolor: blueGrey[700],
                    color: "white",
                    "&:hover": {
                      bgcolor: blueGrey[900],
                      border: "none",
                    },
                  }}
                  onClick={() => navigate("/add_product")}
                >
                  <Typography textAlign="center">Add Product</Typography>
                </MenuItem>
              </Menu>
            </Box>
            {/* <StoreIcon /> */}
            <StoreIcon
              sx={{
                display: { xs: "none", md: "none", sm: "flex" },
                mr: 1,
                fontSize: "2rem",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              // href="#app-bar-with-responsive-menu"
              onClick={() => navigate("/")}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                // fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
                fontSize: "2rem",
                marginRight: "auto",
              }}
            >
              APNA CART
            </Typography>
            <Box
              sx={{
                // flexGrow: 1,
                display: { xs: "none", md: "flex" },
                // marginLeft: "auto",
              }}
            >
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))} */}
              <Button
                // key={page}
                onClick={() => navigate("/")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
              <Button
                // key={page}
                onClick={() => navigate("/cart")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Cart
              </Button>
              <Button
                // key={page}
                onClick={() => navigate("/add_product")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Add Product
              </Button>
              <Button
                // key={page}
                onClick={() => navigate("/about")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                About
              </Button>
            </Box>

            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem
                    key={setting}
                    // onClick={() => getWork(settings.indexOf(setting))}
                    onClick={() => getWork(index)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
            <ShoppingCartIcon
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/cart");
              }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default NavBarMain;
