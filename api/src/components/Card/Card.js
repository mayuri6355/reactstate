

import React, { useState, useEffect } from "react";
const axios=require('axios');
  
function Card(){
  let [user,setUser]=useState([])
  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
    .then(function(response){
      setUser(response.data.results);
    })
    .catch(function(error){
      console.log(error);
    })
  },[])

 
  return(
    
    <div>
      <center><h1>RIky MOrty API</h1></center>
     {
     user.map((item)=>{
       return(
         <div>
           <div className=" card">
          <img src={item.image}></img>
         <p>Name:{item.name}</p>
         <p>Status:{item.status}</p>
         <p></p>
         </div>
         </div>
         
       )
     })
     }

    </div>
  )
}
export default Card;
