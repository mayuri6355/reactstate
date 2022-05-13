
import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Test1 from "./components/TestApi/Test1";
import Test2 from "./components/TestApi/Test2";
import Test3 from "./components/TestApi/Test3";
import Test4 from "./components/TestApi/Test4";
const axios=require('axios')

function App() {
 let [user,setUser]=useState([])
 useEffect(()=>{
   axios.get('https://rickandmortyapi.com/api/location')

   .then(function(response){
     setUser(response.data.results);
   })
   .catch(function(error){
     console.log(error);
   })
 },[])
  return(
    <div className="App">
      {/* {
        user.map((item)=>{
          return(
            <div>
              Name:{item.name}
              <p>Type:{item.type}</p>
              <p>
                Daimasion:{item.dimension}
               
              </p>
              <p> residents:{item.residents}</p>
              </div>
          )
        })

      }
      <Card/> */}
      <Test1/>
      <Test2/>
      <Test3/>
      <Card/>
      <Test4/>
    </div>
    
  )
 
}

export default App;
