/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {


//  const data=useLoaderData()
    // using some optimizing ways

    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Prashil-7')
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setdata(data)

            
        })
    },[])

  return (

    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>Github followers::{data.followers}
    <img src={data.avatar_url} alt=""  width={300}  />
    </div>
  )
}

export default Github

// export  const githubloader = async () => {
//     const res= await fetch('https://api.github.com/users/Prashil-7')
//     return res.json()
// }