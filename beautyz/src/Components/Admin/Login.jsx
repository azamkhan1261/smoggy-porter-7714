import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Text
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
          <Stack spacing={4} w={'full'} maxW={'md'} mt={"-150px"}>
            <Image src='../images/Beautyz_logo.png' h={100} w={300} ml={"80px"}></Image>
            <Heading fontSize={'2xl'}>Login to Beautyz...</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'pink'} variant={'solid'}>
               Login to Beautyz 
            </Button>
            <Text>By signing in, you agree to our <Link color={"pink.600"}>Terms & Conditions</Link><br/>and <Link color={"pink.600"}>Privacy Policy</Link></Text>
            </Stack>
          </Stack>
        </Flex>
        
      </Stack>
    );
  }