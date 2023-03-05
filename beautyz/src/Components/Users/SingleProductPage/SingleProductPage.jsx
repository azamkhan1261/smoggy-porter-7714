import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Heading, Text, Button, Box, Input } from "@chakra-ui/react";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { ADD } from "../../../redux/actions/Action";
// const getData=async(id)=>{
//   return fetch(`https://dark-lime-cockroach-hem.cyclic.app/lakme/${id}`).then((res)=>res.json());
// }

function SingleProductPage() {
  const addtoCartDataArray =
    JSON.parse(localStorage.getItem("selectedData")) || [];

  const getLocalCartData = (data) => {
    // e.preventDefault();
    addtoCartDataArray.push(data);
    console.log(addtoCartDataArray);
    localStorage.setItem("selectedData", JSON.stringify(addtoCartDataArray));
  };

  const [data, setData] = useState([]);
  // const Data = data?.data;
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  let params = useParams();

  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  async function getUser(id) {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://dark-lime-cockroach-hem.cyclic.app/lakme/${id}`
      );
      // console.log("response: ", response);
      setData(response);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  }
  //   const fetchAndUpdateData=(id)=>{
  //     setLoading(true);
  //     getData(id)
  // .then((data)=>{
  //     console.log('data: ', data);
  //     setData(data)

  // })
  //     .catch((err)=>setErr(true))
  //     .finally(()=>setLoading(false));
  //   };

  useEffect(() => {
    getUser(params.id);
  }, [params.id]);

  return loading ? (
    <Heading>Loading...</Heading>
  ) : err ? (
    <Heading>Oops Something went wrong try again...</Heading>
  ) : (
    <Box w={"80%"} m={"auto"} mt={10}>
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <Image
                height={"400px"}
                m={"auto"}
                src={data?.data?.image}
                alt={data?.data?.name}
              />
            </div>
            <div className="column rp">
              <Heading mb={"30px"}>{data?.data?.name}</Heading>
              <Text fontWeight={"bold"}>
                <Button h={"50px"} w={"150px"} className="ui teal tag label">
                  Price : {data?.data?.price}
                </Button>
              </Text>

              <Text
                display={"flex"}
                justifyContent={"center"}
                fontSize={"20px"}
              >
                Quantity :
                <div>
                  <Button onClick={decNum}>-</Button>
                </div>
                <Input
                  w={"30px"}
                  textAlign={"center"}
                  _disabled={true}
                  type="text"
                  value={num}
                  onChange={handleChange}
                />
                <div>
                  <Button onClick={incNum}>+</Button>
                </div>
              </Text>
              <Heading className="ui brown block header">
                Rating : {data?.data?.rating}
              </Heading>
              <Text fontWeight={"bold"} fontSize={20} mb={10}>
                Shades : {"7"}
              </Text>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <button
                  onClick={getLocalCartData(data?.data)}
                  className="visible content"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>

    //  <div style={{margin:"25px", border:"1px solid black"}}>

    //   <Image src={data?.data?.image} alt={data?.data?.name} />

    //   <h4>{data?.data?.name}</h4>

    //   <h5>MRP : {data?.data?.price}</h5>

    //   <p>{data?.data?.rating}</p>
    //    <p>{data?.support?.text}</p>
    // </div>
  );
}

export default SingleProductPage;
