import Box from "@mui/material/Box";
import { keyframes } from "@emotion/react";
import logo from "./../assets/winpaper_icon_black.png";

const PopinAnimation = keyframes`
  0% {
    transform: translateY(-75px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "170px",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          backgroundImage: "linear-gradient(to bottom, #d4d4d4, #ffffff00)",
          animation: `${PopinAnimation} 0.5s ease-in-out`,
        }}
      >
        <Box
          sx={{
            mx: "20px",
            width: "60vw",
            height: "75px",
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "0px 0px 10px 10px",
            display: "flex",
            alignItems: "center",
            border: "1px solid #cecece",
            boxShadow: "5px 5px 10px #d4d4d4",
            flexDirection: "row",
            justifyContent: "space-between",
            animation: `${PopinAnimation} 0.5s ease-in-out`,
          }}
        >
          <Box
            sx={{
              mx: "40px",
              maxWidth: "200px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "30px",
                height: "30px",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.3)",
                },
              }}
            />
            <Box sx={{ fontSize: "25px", color: "black", fontFamily: "Segoe UI, sans-serif" }}>WinPaper</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
