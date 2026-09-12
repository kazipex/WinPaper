import WallpaperThumbnail from "../components/WallpaperThumbnail";
import { Box } from "@mui/material";

//const PopinAnimation = keyframes`
//  0% {
//    transform: translateY(-800px);
//  }
//  100% {
//    transform: translateY(0px);
//  }
//`;

const images = import.meta.glob('../assets/placeholder/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const imagePaths = Object.values(images);

const WallpaperGallery = () => (
  <>
    {imagePaths.map((src) => (
      <WallpaperThumbnail key={src} thumbImage={src} />
    ))}
  </>
);

export default function Home() {
  return (
    <>
      <Box
        sx={{
          height: "65vh",
          backgroundImage: "linear-gradient(to bottom, #d4d4d4, #ffffff00)",
        }}
      />
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
            alignItems: "center",
            py: "10px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 40px 200px #151515af",
            gap: "5px",
          }}
        >
          <Box sx={{ mx: "20px", width: "60vw", display: "flex" }}>
            {" "}
            <WallpaperThumbnail thumbImage="./src/assets/placeholder/placeholder-thumbnail-1.png" />
            <WallpaperThumbnail thumbImage="./src/assets/placeholder/placeholder-thumbnail-2.png" />
            <WallpaperThumbnail thumbImage="./src/assets/placeholder/placeholder-thumbnail-3.png" />
            <WallpaperThumbnail thumbImage="./src/assets/placeholder/placeholder-thumbnail-4.png" />
            <WallpaperThumbnail thumbImage="./src/assets/placeholder/placeholder-thumbnail-5.png" />
          </Box>
        </Box>
      </Box>

      <WallpaperGallery />
    </>
  );
}
