
import { useEffect, useState } from "react";
const axios=require('axios');
function Test1(){
    let[user,setUser]=useState([])
    useEffect(()=>{
        axios.get('https://gorest.co.in/public/v2/users')
        .then(function(response){
            setUser(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    })
    return(
       <div>
            <h1>GET API TESTING 1</h1>
           {
               user.map((item)=>{
                   return(
                       <div>
                     <table width="40%" border='1'>
                    <thead> 
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Status</th>
                    
                    </thead>
                   <tbody>
                           <tr>
                               <td>{item.name}</td>
                               <td>{item.email}</td>
                               <td>{item.gender}</td>
                               <td>{item.status}</td>
                           </tr>
                           </tbody>
                         
                           </table>
                       </div>
                   )
               })
           }
           
       </div>
    )
}
export default Test1;