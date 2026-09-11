import WallpaperThumbnail from "./../components/wallpaper-thumbnail";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <WallpaperThumbnail />
        
      </Box>
    </>
  );
}

