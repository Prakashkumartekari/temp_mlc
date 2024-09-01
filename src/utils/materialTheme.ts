import { createTheme } from "@mui/material";

const materialTheme = createTheme({
  palette: {
    primary: {
      light: "#5be49b",
      main: "#00a76f",
      dark: "#007867",
    },
    secondary: {
      main: "#8e33ff",
      light: "#c684ff",
      dark: "#5119b7",
    },
    text: {
      primary: "#1C252E",
      secondary: "#637381",
    },
  },
  typography: {
    fontFamily:
      '"Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (max-width:900px)": {
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
            "&.MuiContainer-disableGutters": {
              paddingLeft: "0",
              paddingRight: "0",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "8px",
          textTransform: "capitalize",
          fontSize: "0.9rem",
          minWidth: "64px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});
export default materialTheme;
