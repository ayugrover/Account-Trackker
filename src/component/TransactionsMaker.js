import React, {useState} from 'react';
import './Transaction.css';

const TransactionsMaker = ({onClick, balance}) =>{
    const[value, setValue] = useState(1);
    const onChange = event => {
        if(event.target.value != 0)
             setValue(event.target.value);
      };

     /* const increment = () =>{
            var total = balance + value;
            updateBalance(total);
            console.log(total);
      }

      const decrement = () =>{
        var total = balance - value;
            updateBalance(total);
      }*/

    return (
        <div className="Tmaker">
            <form >
             <label className="balance">{`Balance: ${balance}`}</label>
             <br/><br/>
             <input type="number"
                name= "quantity"
                value= {value}
                onChange={onChange} 
                min = '1'/>
             <br/>
             <br/>
             <button id="add" onClick={e => onClick(value,e)}>Add</button>  
           
             <button id="sub" onClick={e => onClick(value,e)}>Remove</button>
            </form>
        </div>
        ); 
};

export default TransactionsMaker;