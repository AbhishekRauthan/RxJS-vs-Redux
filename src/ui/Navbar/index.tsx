import { IconButton, Menu, MenuItem } from "@mui/material";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, MenuBox, NavBox, NavLogo } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";

const StyledLink = ({ to, children }: { to: string; children: ReactNode }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "black" }}>
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const linksData = [
    {
      to: "/redux",
      linkName: "Redux App",
    },
    {
      to: "/rxjs",
      linkName: "RxJS App",
    },
  ];
  return (
    <HeaderContainer as="header">
      <StyledLink to="/">
        <NavLogo as="h1">RxJS vs Redux</NavLogo>
      </StyledLink>
      <MenuBox aria-label="menu-box">
        <IconButton
          aria-label="menu-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            color: "black",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "menu-button",
          }}
        >
          {linksData.map((link) => (
            <StyledLink to={link.to}>
              <MenuItem onClick={handleClose}>{link.linkName}</MenuItem>
            </StyledLink>
          ))}
        </Menu>
      </MenuBox>
      <NavBox>
        {linksData.map((link) => (
          <StyledLink to={link.to}>{link.linkName}</StyledLink>
        ))}
      </NavBox>
    </HeaderContainer>
  );
};

export default Navbar;
