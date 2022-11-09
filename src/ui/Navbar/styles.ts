import Typography, { TypographyProps } from "@mui/material/Typography";
import Contaienr, { ContainerProps } from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

export const HeaderContainer = styled(Contaienr)<ContainerProps>(
  ({ theme }) => ({
    maxWidth: theme.breakpoints.values.xl,
    paddingBlock: "1rem",
    marginInline: "auto",
    borderBottom: "1px solid",
    paddingInline: "0.5rem",
    borderColor: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("xl")]: {
      paddingInline: 0,
    },
  })
);

export const NavLogo = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: `${theme.typography.h6.fontSize}`,
  margin: 0,
  [theme.breakpoints.up("sm")]: {
    fontSize: `${theme.typography.h5.fontSize}`,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: `${theme.typography.h4.fontSize}`,
    marginLeft: theme.typography.caption.fontSize,
  },
}));

export const MenuBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const NavBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    width: "30%",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: `${theme.typography.h6.fontSize}`,
  },
  [theme.breakpoints.up("md")]: {
    width: "25%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "20%",
  },
}));
