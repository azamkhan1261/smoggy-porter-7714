import React, { useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';
import { Image,Heading,Text,Button,Box} from "@chakra-ui/react"
import axios from 'axios';
// const getData=async(id)=>{
//   return fetch(`https://dark-lime-cockroach-hem.cyclic.app/lakme/${id}`).then((res)=>res.json());
// }

function SingleProductPage() {

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [err,setErr] = useState(false);
  let params = useParams();

  async function getUser(id) {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://dark-lime-cockroach-hem.cyclic.app/lakme/${id}`
      );
      console.log('response: ', response);
      setData(response);
      setLoading(false);
    } catch (error) {
      setErr(true)
      setLoading(false)
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

  useEffect(()=>{
    getUser(params.id);
  },[params.id]);

  return loading?(
    <Heading>Loading...</Heading>
  ):err?(
    <Heading>Oops Something went wrong try again...</Heading>
  ): (
    <Box w={'80%'} m={'auto'} mt={10}>
      <div className="ui placeholder segment" >
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <Image height={'400px'} m={'auto'} src={data?.data?.image} alt={data?.data?.name}/>
            </div>
            <div className="column rp">
              <Heading>{data?.data?.name}</Heading>
              <Heading>
                <Button   className="ui teal tag label">Price : {data?.data?.price}</Button>
              </Heading>
              <Heading className="ui brown block header">Rating : {data?.data?.rating}</Heading>
              <Text fontWeight={'bold'} fontSize={20} mb={10}>Shades : {"7"}</Text>
              <div  className="ui vertical animated button" tabIndex="0"  color={'pink'}>
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
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
  )
}

export default SingleProductPage