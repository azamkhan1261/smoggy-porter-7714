import React, { useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';
import {Image} from "@chakra-ui/react"
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
        `https://dark-lime-cockroach-hem.cyclic.app/lakme`
      );
      console.log('response: ', response);
      setData(response);
      

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
    <Image src="https://media4.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif?cid=ecf05e4796uf0yzngbu9ryv8901ligzskrtdef5q24m527de&rid=giphy.gif&ct=g"></Image>
  ):err?(
    <h1>Oops Something went wrong try again...</h1>
  ): (
    <div style={{margin:"25px", border:"1px solid black"}}>
      {/* <Image src={data?.image} alt={data?.name} />

      <h4>{data?.data?.name}</h4>

      <h5>MRP : {data?.data?.price}</h5>
  
      <p>{data?.data?.rating}</p> */}
      {/* <p>{data?.support?.text}</p> */}
    </div>
  )
}

export default SingleProductPage