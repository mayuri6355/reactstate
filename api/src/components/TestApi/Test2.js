
import { useEffect, useState } from "react";
const axios=require('axios')
function Test2(){
let [user,setuser]=useState([])
useEffect(()=>{
    axios.get('https://gorest.co.in/public/v2/posts')
    .then(function(response){
        setuser(response.data);
    })
    .catch(function(error){
        console.log(error);
    })
})
    return(
        <div>
            <h1>GET API TESTING 2</h1>
            {
                user.map((item)=>{
                    return(
                        <div>
                            <table width="40%" border="1">
                                <thead>
                                    <th>ID</th>
                                    <th>USER_ID</th>
                                    <th>TITLE</th>
                                    <th>BODY</th>
                                </thead>
                            <tbody>
                            <td>{item.id}</td>
                            <td>{item.user_id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                         
                            </tbody>
                            </table>
                            </div>
                    )
                })
            }
        </div>
    )
}
export default Test2;