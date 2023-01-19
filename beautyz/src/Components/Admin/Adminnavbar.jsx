import {
    Box,
    Flex,
    useColorModeValue,
    useBreakpointValue,
    Image,

  } from '@chakra-ui/react';
  import { Routes,Route,NavLink } from 'react-router-dom';
    import Login from './Login';
    import Home from './Home';
    import Dashboard from './Dashboard';


  export default function Adminnavbar() {
   

        
    return (
      <Box>
        
          <Flex justifyContent={"space-between"} minH={"80px"} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} alignItems={"center"} display={"flex"}>
            <Image 
              src={"../images/Beautyz_logo.png"}
              h={"50px"}
              ml={"50px"}
            > 
            </Image>
            <Box gap={"50px"} display={"flex"} mr={"200px"}>
                <NavLink to="/" >Home</NavLink>
                
                <NavLink to="/dashboard">Dashboard</NavLink>  
                <NavLink to="/login" >Login</NavLink>
            </Box>

            </Flex>
            
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
      </Box>
    );
  }
 