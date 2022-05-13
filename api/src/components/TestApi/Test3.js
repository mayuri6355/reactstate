import { useEffect, useState } from "react";
const axios=require('axios')

function Test3(){
    let[user,setUser]=useState([])
    useEffect(()=>{
        axios.get('https://gorest.co.in/public/v2/comments')
        .then(function(response){
            setUser(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    })
    return(
        <div><h1>GET API TESTING 3</h1>
{
    user.map((item)=>{
        return(
            <div>
                <table width="40%" border="1">
                    <thead>
                        <th>ID</th>
                        <th>POST_Id</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>BODY</th>
                    </thead>

                    <tbody>
                   <td> {item.id}</td>
                   <td>{item.post_id}</td> 
                   <td>{item.name}</td>
                   <td>{item.email}</td>
                   <td>{item.body}</td>


                   ..............................................
                    </tbody>
              
                </table>
           
                </div>
        )
    })
}
        </div>
    )
}
export default Test3;