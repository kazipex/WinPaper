import { Box } from "@mui/material";

interface WallpaperThumbnailProps {
  thumbImage: string;
}

const WallpaperThumbnail = ({ thumbImage }: WallpaperThumbnailProps) => {
  return (
    <>
      <Box onClick={() => console.log("clicked")}
        sx={{
          width: "300px",
          height: "540px",
          display: "flex",
          backgroundColor: "white",
          justifyContent: "center",
          backgroundImage:
            `url(${thumbImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            width: "1080px",
            height: "540px",
          },
        }}
      ></Box>
    </>
  );
};

export default WallpaperThumbnail;
