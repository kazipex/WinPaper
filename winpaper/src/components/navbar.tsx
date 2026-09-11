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
            width: "50vw",
            height: "75px",
            backgroundColor: "white",
            borderRadius: "0px 0px 10px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            border: "1px solid #e5e5e5",
            boxShadow: "5px 5px 10px #e5e5e5",
            flexDirection: "row",
          }}
        >
          <Box sx={{ mx: "20px"}}>
            <Box sx={{ fontSize: "20px", color: "black" }}>WINPAPER</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
