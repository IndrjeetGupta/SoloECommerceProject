import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../LandingPageImage/01.jpg";
import image01 from "../LandingPageImage/image01.jpg";
import image02 from "../LandingPageImage/image02.jpg";
import image03 from "../LandingPageImage/image03.jpg";
import image04 from "../LandingPageImage/image04.jpg";
import image05 from "../LandingPageImage/image05.jpg";
import image06 from "../LandingPageImage/image06.jpg";
import image07 from "../LandingPageImage/image07.jpg";
import image08 from "../LandingPageImage/image08.jpg";

function Landingpage() {
  const navigate = useNavigate(); // ✅ get the navigate function

  const handleClick = () => {
    navigate("/product"); // 👈 navigate to /about
  };

  const imageDatas = [
    { id: 1, image: image01 },
    { id: 2, image: image02 },
    { id: 3, image: image03 },
    { id: 4, image: image04 },
    { id: 5, image: image05 },
    { id: 6, image: image06 },
    { id: 7, image: image07 },
    { id: 8, image: image08 },
  ];
  return (
    <Box sx={{}}>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          bgcolor: "red",
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            animation: "scroll-left 20s linear infinite",
            zIndex: "-100px",
            bgcolor: "black",
          }}
        >
          {/* Repeating the image for continuous scroll effect */}
          {imageDatas.map((image) => (
            <Box
              onClick={handleClick}
              component="img"
              src={image.image}
              alt="scrolling"
              sx={{
                width: "400px",
                height: "400px",
                m: 1,
                justifyContent: "space-between",
              }}
            />
          ))}
        </Box>

        {/* Keyframes using MUI's GlobalStyle */}
        <style>
          {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
        </style>
      </Box>

      <Box
        onClick={handleClick}
        sx={{
          width: "100%",
          height: "100vh",
        }}
        component="img"
        src={image}
      ></Box>
    </Box>
  );
}

export default Landingpage;
