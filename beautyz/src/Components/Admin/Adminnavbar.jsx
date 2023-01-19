import {
    Box,
    Flex,
    useColorModeValue,
    useBreakpointValue,
    Image,
    
  } from '@chakra-ui/react';

  export default function Adminnavbar() {
   
  
    return (
      <Box>
        
          <Flex minH={"80px"} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} alignItems={"center"}>
            <Image
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              src={"../images/Beautyz_logo.png"}
              h={"50px"}
              ml={"50px"}
            > 
            </Image>
            </Flex>
      </Box>
    );
  }
 