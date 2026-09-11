import { Box } from "@mui/material";

const wallpaperThumbnail = () => {
  return (
    <>
      <Box
        sx={{
          width: "480px",
          height: "270px",
          display: "flex",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "5px 5px 10px #e5e5e5",
          justifyContent: "center",
          backgroundImage:
            "url(./src/assets/placeholder/placeholder-thumbnail.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            width: "540px",
            height: "303px",
            boxShadow: "10px 10px 20px #8e8e8e",
          },
        }}
      ></Box>
    </>
  );
};

export default wallpaperThumbnail;
