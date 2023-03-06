import React from 'react'
import { useParams } from 'react-router-dom'

const EditContact = () => {
    var {userId}=useParams()
    console.log(userId)
  return (
    <div>EditContact</div>
  )
}

export default EditContact