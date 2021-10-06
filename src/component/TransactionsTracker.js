import React, { useState, useEffect } from 'react';
import './Transaction.css';

const TransactionsTracker = (props) =>{
   const[details, setDetails] = useState();
   useEffect(() =>{
        setDetails(`${props.transactionDate} - ${props.balance} - ${props.mode}`);
   }, [props.balance]);

    return (
        <div className="transactions">
             <h3>Transactions :</h3>
             <div>{details}</div>
        </div>  
        );
};

export default TransactionsTracker;