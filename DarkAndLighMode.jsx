import { IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";



const Header1 = ({setMode}) => {
  const theme = useTheme();
  return (
    <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "currentTheme",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            setMode((prevMode) =>
            prevMode === "light" ? "dark" : "light"
          );
          }}
          color="inherit"
        >
          <LightModeOutlined />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "currentTheme",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            setMode((prevMode) =>
            prevMode === "light" ? "dark" : "light"
          );
          }}
          color="inherit"
        >
          <DarkModeOutlined />
        </IconButton>
      )}
    </div>
  );
};

export default Header1;