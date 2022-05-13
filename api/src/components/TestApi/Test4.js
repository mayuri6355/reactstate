

import { useEffect, useState } from "react";
const axios=require('axios')
function Test4(){
    let[user,setUser]=useState([])
    useEffect(()=>{
        axios.get('https://swapi.dev/api/people/1/')
        .then(function(response){
        setUser(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    })
    return(
     <div>
   <h1>ARRAY API TESATING</h1>

   {
       user.map((item)=>{
           return(
               <div>
                    NAME:{item.name}
                   <p>HEIGHT:{item.height}</p>
                   <p>MASS:{item.mass}</p>
                   <p>HAIR_COLOR:{item.hair_color}</p>
                   </div>
           )
       })
   }
     </div>   
   

    )
}
export default Test4;