import { Box, Center } from "@chakra-ui/react";
import ContentCard2 from "../../components/ContentCard2";

const data = {
    "userId": 1,
    "username" : "jordan",
    "location": "BSD",
    "image_url": "https://imageio.forbes.com/specials-images/imageserve/62278bc6897b081d1eef49ea/2022-BMW-i4-coup--electric-car/960x0.jpg?format=jpg&width=960",
    "numberOfLikes": 1234,
    "caption": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore enim praesentium inventore asperiores sunt corporis unde dicta ipsa dolorum voluptatibus dolor, odio nobis est consequuntur labore!",
    "id": 1
}

function postIg() {
  return (
    <Box>
      <Center>
        <ContentCard2 {...data} />
      </Center>
    </Box>
  );
}
export default postIg;
