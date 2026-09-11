import WallpaperThumbnail from "./../components/wallpaper-thumbnail";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "200vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#f8f8f8",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            py: "10px",
            backgroundColor: "#ffffff",
          }}
        >
          <WallpaperThumbnail />
          <WallpaperThumbnail />
          <WallpaperThumbnail />
          <WallpaperThumbnail />
        </Box>
        
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            pb: "10px",
            backgroundColor: "#ffffff",
          }}
        >
          <WallpaperThumbnail />
          <WallpaperThumbnail />
          <WallpaperThumbnail />
          <WallpaperThumbnail />
        </Box>
      </Box>
    </>
  );
}
