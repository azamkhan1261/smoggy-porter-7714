// import {
//     Box,
//     Flex,
//     Text,
//     IconButton,
//     Button,
//     Stack,
//     Collapse,
//     Icon,
//     Link,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     useColorModeValue,
//     useBreakpointValue,
//     useDisclosure,
//     Image,
//     Input
//   } from '@chakra-ui/react';
//   import {
//     HamburgerIcon,
//     CloseIcon,
//     ChevronDownIcon,
//     ChevronRightIcon,
//   } from '@chakra-ui/icons';
//   import {AiOutlineShopping} from "react-icons/ai"
//   import Cartsidebar from './Cartsidebar';
//   export default function Navbar() {
//     const { isOpen, onToggle } = useDisclosure();
  
//     return (
//       <Box>
//         <Flex
//           bg={useColorModeValue('white', 'gray.800')}
//           color={useColorModeValue('gray.600', 'white')}
//           minH={'60px'}
//           py={{ base: 2 }}
//           px={{ base: 4 }}
//           borderBottom={1}
//           borderStyle={'solid'}
//           borderColor={useColorModeValue('gray.200', 'gray.900')}
//           align={'center'}>
//           <Flex
//             flex={{ base: 1, md: 'auto' }}
//             ml={{ base: -2 }}
//             display={{ base: 'flex', md: 'none' }}>
//             <IconButton
//               onClick={onToggle}
//               icon={
//                 isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//               }
//               variant={'ghost'}
//               aria-label={'Toggle Navigation'}
//             />
//           </Flex>
//           <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
//             <Image
//               textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
//               color={useColorModeValue('gray.800', 'white')}
//               src={"../images/Beautyz_logo.png"}
//               h={"50px"}
//               ml={"100px"}
//               >
//             </Image>
  
//             <Flex display={{ base: 'none', md: 'flex' }} ml={10} alignItems={"center"} >
//               <DesktopNav />
//             </Flex>
//             <Flex w={"300px"} ml={"100px"} display={"flex"} alignItems={"center"}>
//                 <Input variant='filled' size='sm' placeholder='Search for Beautyz...' focusBorderColor='pink.200'/>
//             </Flex>
//           </Flex>
  
//           <Stack
//             flex={{ base: 1, md: 0 }}
//             justify={'flex-end'}
//             direction={'row'}
//             spacing={6}>
//             <Button
//               as={'a'}
//               fontSize={'sm'}
//               fontWeight={400}
//               variant={'outline'}
//               href={'login'}
//               mr={"50px"}
//               colorScheme='pink'
//               >
//               Sign In
//             </Button>
            
//           </Stack>
//           {/* <Stack fontSize={"25px"} mr={"100px"}> */}
//              {/* <AiOutlineShopping/> */}
//              {/* <Cartsidebar/> */}
//           {/* </Stack> */}
         
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity>
//           <MobileNav />
//         </Collapse>
//       </Box>
//     );
//   }
  
//   const DesktopNav = () => {
//     const linkColor = useColorModeValue('gray.600', 'gray.200');
//     const linkHoverColor = useColorModeValue('gray.800', 'white');
//     const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
//     return (
//       <Stack direction={'row'} spacing={4}>
//         {NAV_ITEMS.map((navItem) => (
//           <Box key={navItem.label}>
//             <Popover trigger={'hover'} placement={'bottom-start'}>
//               <PopoverTrigger>
//                 <Link
//                   p={2}
//                   href={navItem.href ?? '#'}
//                   fontSize={'17px'}
//                   fontWeight={500}
//                   color={linkColor}
//                   _hover={{
//                     textDecoration: 'none',
//                     color: linkHoverColor,
//                   }}>
//                   {navItem.label}
//                 </Link>
//               </PopoverTrigger>
  
//               {navItem.children && (
//                 <PopoverContent
//                   border={0}
//                   boxShadow={'xl'}
//                   bg={popoverContentBgColor}
//                   p={4}
//                   rounded={'xl'}
//                   minW={'sm'}>
//                   <Stack>
//                     {navItem.children.map((child) => (
//                       <DesktopSubNav key={child.label} {...child} />
//                     ))}
//                   </Stack>
//                 </PopoverContent>
//               )}
//             </Popover>
//           </Box>
//         ))}
//       </Stack>
//     );
//   };
  
//   const DesktopSubNav = ({ label, href, subLabel }) => {
//     return (
//       <Link
//         href={href}
//         role={'group'}
//         display={'block'}
//         p={2}
//         rounded={'md'}
//         _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//         <Stack direction={'row'} align={'center'}>
//           <Box>
//             <Text
//               transition={'all .3s ease'}
//               _groupHover={{ color: 'pink.400' }}
//               fontWeight={500}>
//               {label}
//             </Text>
//             <Text fontSize={'sm'}>{subLabel}</Text>
//           </Box>
//           <Flex
//             transition={'all .3s ease'}
//             transform={'translateX(-10px)'}
//             opacity={0}
//             _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//             justify={'flex-end'}
//             align={'center'}
//             flex={1}>
//             <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//           </Flex>
//         </Stack>
//       </Link>
//     );
//   };
  
//   const MobileNav = () => {
//     return (
//       <Stack
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         display={{ md: 'none' }}>
//         {NAV_ITEMS.map((navItem) => (
//           <MobileNavItem key={navItem.label} {...navItem} />
//         ))}
//       </Stack>
//     );
//   };
  
//   const MobileNavItem = ({ label, children, href }) => {
//     const { isOpen, onToggle } = useDisclosure();
  
//     return (
//       <Stack spacing={4} onClick={children && onToggle}>
//         <Flex
//           py={2}
//           as={Link}
//           href={href ?? '#'}
//           justify={'space-between'}
//           align={'center'}
//           _hover={{
//             textDecoration: 'none',
//           }}>
//           <Text
//             fontWeight={600}
//             color={useColorModeValue('gray.600', 'gray.200')}>
//             {label}
//           </Text>
//           {children && (
//             <Icon
//               as={ChevronDownIcon}
//               transition={'all .25s ease-in-out'}
//               transform={isOpen ? 'rotate(180deg)' : ''}
//               w={6}
//               h={6}
//             />
//           )}
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//           <Stack
//             mt={2}
//             pl={4}
//             borderLeft={1}
//             borderStyle={'solid'}
//             borderColor={useColorModeValue('gray.200', 'gray.700')}
//             align={'start'}>
//             {children &&
//               children.map((child) => (
//                 <Link key={child.label} py={2} href={child.href}>
//                   {child.label}
//                 </Link>
//               ))}
//           </Stack>
//         </Collapse>
//       </Stack>
//     );
//   };
  
// //   interface NavItem {
// //     label: string;
// //     subLabel?: string;
// //     children?: Array<NavItem>;
// //     href?: string;
// //   }
  
//   const NAV_ITEMS= [
//     {
//       label: 'Category',
//       children: [
//         {
//           label: 'Explore Design Work',
//           subLabel: 'Trending Design to inspire you',
//           href: '#',
//         },
//         {
//           label: 'New & Noteworthy',
//           subLabel: 'Up-and-coming Designers',
//           href: '#',
//         },
//       ],
//     },
//     {
//       label: 'Brands',
//       children: [
//         {
//           label: 'Job Board',
//           subLabel: 'Find your dream design job',
//           href: '#',
//         },
//         {
//           label: 'Freelance Projects',
//           subLabel: 'An exclusive list for contract work',
//           href: '#',
//         },
//       ],
//     },
//     {
//       label: 'Luxe',
//       href: '#',
//     },
//     {
//       label: 'Beautyz Fashion',
//       href: '#',
//     },
//     {
//       label: 'Beauty Advice',
//       href: '#',
//     },
//   ];

// import React, { useState,useEffect } from 'react'
// import style from './Navbar.module.css'
// import { IoIosSearch } from 'react-icons/io';
// import { FaRegUser } from 'react-icons/fa';
// import { RiGift2Line } from 'react-icons/ri';
// import { BsHandbag } from 'react-icons/bs';
// import NavbarPopUpComponents from '../NavComponent/NavbarPopUpComponents';
// import {useNavigate} from 'react-router-dom'
// import {MuiDrawer} from '../../Product page/MuiDrawer'

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [howerState, setHowerState] = useState("");
//   const [login, setLogin] = useState(false);
//   const hoverHandler = (type) => {
//     setHowerState(type);
//   };
//   const handleLogin = () => {
//     if (login) {
//       setLogin(false);
//       localStorage.removeItem("user");
//       localStorage.removeItem("oAuth");
//       window.location.reload()
//     } else {
//       navigate("/login");
//     }
//   };

//   useEffect(() => {
//     const data =
//       JSON.parse(localStorage.getItem("user")) ||
//       JSON.parse(localStorage.getItem("oAuth"));

//     if (data) setLogin(true);
//   }, []);
//   return (
//     <>
//       <div className={style.container}>
//         <div className={style.card}>
//           <div>
//             <img
//               style={{cursor:"pointer"}}
//               onClick={()=>navigate("/")}
//               src="https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png"
//               className={style.card4}
//               alt="nykka"
//             />
//             <p>Categories</p>
//             <p onMouseOver={() => hoverHandler("BRANDS")}>Brands</p>
//             <p onMouseEnter={() => hoverHandler("LUXE")}>Luxe</p>
//             <p onMouseEnter={() => hoverHandler("NYKAA")}>Nykaa Fashion</p>
//             <p onMouseEnter={() => hoverHandler("BEAUTY")}>Beauty Advice</p>
//           </div>
//           <div>
//             <div className={style.inputContainer}>
//               <input
//                 style={{position: "relative"}}
//                 type="text"
//                 className={style.input}
//                 placeholder="Search on Nykaa"
//               />
//             </div>
//             <div className={style.card2}>
//               <p>
//                 <FaRegUser fontSize="2.5vh" cursor="pointer" />
//               </p>
//               <p onClick={() => handleLogin()}>{!login ? "Login" : "Logout"}</p>
//             </div>
//             <div className={style.card3}>
              
//                 <MuiDrawer />
//             </div>
//           </div>
//         </div>

//         <div className={style.content} onMouseLeave={() => setHowerState("")}>
//           {howerState && <NavbarPopUpComponents type={howerState} />}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar