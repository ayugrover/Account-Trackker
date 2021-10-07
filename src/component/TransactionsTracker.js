import React, { useState, useEffect } from 'react';
import './Transaction.css';

const TransactionsTracker = (props) =>{
     const[details, setDetails] = useState([]);

   useEffect(() =>{
     const newDetails = [...details, ` ${props.transactionDate} - ${props.balance} - ${props.mode}`];
     setDetails(newDetails);
     console.log(details);
   }, [props.balance]);
   
   var i=0;
    return (
        <div className="transactions">
             <h3>Transactions :</h3>
             <div>
             {details.map(detail => <div key={i++}>{detail}</div>)}
             </div>
        </div>  
        );
};

export default TransactionsTracker;