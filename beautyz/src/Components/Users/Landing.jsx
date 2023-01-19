import { useEffect, useState } from "react";
import { Image, Box, Button, Flex } from "@chakra-ui/react";
import {ChevronLeftIcon,ChevronRightIcon} from "@chakra-ui/icons"
let carouselImages = [
  "https://images-static.nykaa.com/uploads/c8047e49-1a2c-43f9-9d6e-bbe43c62f6aa.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/9ef6a6c2-9107-487c-8a4b-e886becea619.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/c118419f-32dc-4a2d-8df9-e8d14c4c9ed2.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/9a31555b-f600-4e97-8063-50b33e3495e2.png?tr=w-1200,cm-pad_resize",
];
function Landing() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState(carouselImages);

  useEffect(() => {
    setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage < 3 ? selectedImage + 1 : 0
      );
    }, 2000);
  }, []);

  return (
    <Box>
      <Box >
        <Image width={"95%"} height={400} src={allImages[selectedImage]} m={"auto"} />{" "}
        
        <Flex   mt={"-200px"} >
          <Button
          onClick={() => {
            if (selectedImage > 0) setSelectedImage(selectedImage - 1);
          }}
          borderRadius={"50%"}
          fontSize={"40px"}
          fontWeight={"800"}
          
        >
          <ChevronLeftIcon/>
        </Button>
        <Button
          onClick={() => {
            if (selectedImage < allImages.length - 1)
              setSelectedImage(selectedImage + 1);
          }}
          borderRadius={"50%"}
          fontSize={"40px"}
          fontWeight={"800"}
          ml={"90%"}
        >
          <ChevronRightIcon/>
        </Button>  
        </Flex>
      </Box>
    </Box>
  );
}

export default Landing;
