import logo from './logo.svg';
import './App.css';
import  { useEffect, useState } from 'react';
const axios = require('axios')
function App() {
  let [user,setuser] = useState([])

  useEffect(()=>{

    axios.get('https://rickandmortyapi.com/api/character')
        .then(function (response) {
        // handle success
        setuser(response.data.results);
     })
     
    .catch(function (error) {
        // handle error
        console.log(error);
      })
    

  },[])
  return (
    <div className="App">
     
      {
            user.map((item)=>{
              return(
                <div>
                      <img src={item.image}></img>
                      <div>Name : {item.name}</div>
                      <p>Status : {item.status}</p>
                      <p>Gender : {item.gender}</p>
                      <p>Location : {item.location.name}</p>

                </div>
              )
            })
      }

    </div>
  );
}

export default App;
