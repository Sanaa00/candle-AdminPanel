import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const{ _id} = useParams()
  return (
    <div>
      hello
    </div>
  )
}

export default ProductDetails
