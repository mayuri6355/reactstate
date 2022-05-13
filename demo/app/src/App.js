import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Demo from './Component/Demo';


function App() {
   
  const [Quntity, setQuntity] = useState(0);
  const[price,setPrice]=useState(0);
 
  const test=()=>{
    
    setQuntity(Quntity+1)
    setPrice(price+100)
   
  }

  const test1=()=>{
    setPrice(price-100)
    setQuntity(Quntity-1)
  }


  return (
    <div className="App">
     
      <div>
        <h1>Product List</h1>
      <img src={require('./Images/product1.jpg')}></img><br></br>
        <p>Qty:{Quntity}</p>
        <p>Price:{price}</p>
   
      <input type="button" value="+" onClick={test}></input>&nbsp;&nbsp;
      
      <input type="button" value="-" onClick={test1}></input>&nbsp;&nbsp;
      </div>
    </div>
  );
}

export default App;
