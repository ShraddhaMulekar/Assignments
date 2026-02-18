import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {id} = useParams()
    const [proDetails, setProDetail] = useState(null)

    console.log(id)
    const fetchProDetail = async()=>{
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProDetail(res.data)
      console.log(res)
    }

    useEffect(()=>{
      fetchProDetail()
    },[id])

    if(!proDetails){
      return <h4>Loading..</h4>
    }

    console.log({proDetails})
  return (
    <div>
      <h1>{proDetails?.title}</h1>
      <img src={proDetails?.image} alt={proDetails?.title} />
      <p>{proDetails.price}</p>
      <p>{proDetails.category}</p>
      <p>{proDetails.description}</p>
    </div>
  )
}

export default ProductDetail