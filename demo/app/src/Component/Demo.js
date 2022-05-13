
import { useState } from 'react';
function Demo(item){
    const [counter, setCounter] = useState(1)

    return(
        <div>
           
         
           <p>Qty:{counter}</p>

           <input type="button" value="+" onClick={() => setCounter(counter + 1)}></input>&nbsp;&nbsp;
      
            <input type="button" value="-" onClick={() => setCounter(counter - 1)}></input>&nbsp;&nbsp;
           ...
           Total: {parseFloat(item.price*counter)}$
           ...
        </div>
        
    )
}
export default Demo;