import {
    Flex,
    Heading,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  export default function Login() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={2}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            w={"150%"}
            h={"700px"}
            src={
              'https://seller.nykaa.com/images/onboarding-image.webp'
            }
          />
        </Flex>
        <Flex p={2} flex={1}  align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'} mt={"-200px"}>
            <Image src='../images/Beautyz_logo.png' h={100} w={300} ml={"80px"}></Image>
            
           <Heading>Welcome to Beautyz...</Heading>
          </Stack>
        </Flex>
        
      </Stack>
    );
  }