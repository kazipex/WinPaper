import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "75px",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            mx: "20px",
            height: "75px",
            backgroundColor: "white",
            borderRadius: "0px 0px 10px 10px",
            display: "flex",
            alignItems: "center",
            border: "1px solid #e5e5e5",
            boxShadow: "5px 5px 10px #bcbcbc",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mx: "40px", maxWidth: "200px", display: "flex", alignItems: "center", gap: "5px" }}>
            <Box
              sx={{
                backgroundImage: "url(./src/assets/winpaper_icon_black.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "30px",
                height: "30px",
              }}
            />
            <Box sx={{ fontSize: "20px", color: "black" }}>WINPAPER</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
