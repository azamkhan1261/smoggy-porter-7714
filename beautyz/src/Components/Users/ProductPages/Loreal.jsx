import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import MainNavbar from "./Navbar/MainNavbar";
// import { Link } from "react-router-dom";
import { Button, Box, Heading, Text, Image } from "@chakra-ui/react";

import { FaRegHeart } from "react-icons/fa";
// import Footer from "./Footer/Footer";
// async function getUser() {
//     try {
//       const response = await axios.get(`https://dark-lime-cockroach-hem.cyclic.app/lakme`);
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }

function Loreal() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  // let params = useParams();

  // async function getUser() {
  //   try {
  //     const response = await axios.get(
  //       `https://dark-lime-cockroach-hem.cyclic.app/lakme?_sort=view&_order=asc`
  //     );
  //     setData(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  async function getUser() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://dark-lime-cockroach-hem.cyclic.app/loreal`
      );
      // console.log("response: ", response);
      setData(response);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Box>
      {loading ? (
        <Heading mt={"20px"}>Loading....</Heading>
      ) : err ? (
        <h1>Oops Something went wrong try again...</h1>
      ) : (
        <Box bgColor={"#f3f3f3"}>
          <Text fontSize={"20px"} fontWeight={"400"} mt={"30px"}>
          L'Oreal Paris (186)
          </Text>
          {/* <Box
            display={"flex"}
            m={"auto"}
            justifyContent={"center"}
            mt={"30px"}
            w={"90%"}
          >
            <Box bg={"grey"} alignItems={"center"} p={"50px"}>
              <Text fontSize={"30px"} fontWeight={"600"}>
                These Hybrid Products From Lakme Are A Revelation
              </Text>
              <Text fontWeight={"500"} mt={"50px"} mb={"20px"}>
                Let alone a few minutes to spare for a quick glam sesh!
              </Text>
              <Text color="pink.500">
                Read more on Nykaa's Beauty Book{">"}
              </Text>
            </Box>
            <Box>
              <Image
                h={"320px"}
                w={"550px"}
                src="https://www.nykaa.com/media/categoryInfo/art_banner_image/thesehybridproductsfromlakmearearevelationcb.jpg"
              />
            </Box>
          </Box> */}
          <Heading mt={"30px"} mb={"20px"}>
            All Products
          </Heading>
          <Box display={"flex"} w={"90%"} m={"auto"} gap={"10px"}>
            <Box flex={1} border={"1px solid grey"}>
              <Text fontSize={"30px"} fontWeight={"500"} mb={"20px"}>
                Sort By
              </Text>
              <Box gap={"20px"} display={"grid"}>
                <Text fontWeight={"600"}>
                  SortBy Price :{" "}
                  <Button colorScheme={"pink"} variant="outline">
                    Low to High
                  </Button>
                </Text>
                <Text fontWeight={"600"}>
                  SortBy Price :{" "}
                  <Button colorScheme={"pink"} variant="outline">
                    High to Low
                  </Button>
                </Text>
                <Text fontWeight={"600"}>
                  SortBy Rating :{" "}
                  <Button colorScheme={"pink"} variant="outline">
                    High to Low
                  </Button>
                </Text>
              </Box>
            </Box>

            <Box
              display={"grid"}
              gridTemplateColumns={"repeat(3,1fr)"}
              backgroundColor={"grey.300"}
              flex={3}
              textAlign={"center"}
              gap={"20px"}
              justifyContent={"center"}
              // w={"80%"}
            >
              {data?.data?.map((item) => (
                <Box
                  key={item.id}
                  border={"1px solid grey"}
                  mb={"20px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"grid"}
                  pl={"50px"}
                  pr={"50px"}
                  boxShadow="base"
                  p="6"
                  rounded="md"
                  bg="white"
                >
                  <Link to={`/loreal/${item.id}`}>
                  <img src={item.image} alt="img" />
                  <h4 style={{ fontWeight: "700" }}>{item.name}</h4>
                  <p>MRP : ₹ {item.price}</p>
                  <p>Rating : {item.rating}</p>
                  <p>Shades {Math.floor(Math.random() * 9) + 2}</p>
                  <Box
                    display="flex"
                    textAlign="center"
                    gap="15px"
                    alignItems="center"
                    justifyContent="center"
                    mt={"20px"}
                  >
                    <Button>
                      <FaRegHeart />
                    </Button>
                    <Button colorScheme={"pink"} w={"200px"}>
                      preview
                    </Button>
                  </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
          {/* <Image src="https://media4.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif?cid=ecf05e4796uf0yzngbu9ryv8901ligzskrtdef5q24m527de&rid=giphy.gif&ct=g"></Image> */}
        </Box>
      )}
    </Box>
  );
}

export default Loreal;
