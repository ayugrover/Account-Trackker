import './App.css';
import TransactionsTracker from './component/TransactionsTracker';
import TransactionsMaker from './component/TransactionsMaker';
import { useState, useEffect } from 'react';

function App() {
  var currentDate = new Date();
  var[balance, setBalance] = useState(500);
  const[mode, setMode] = useState("add");
  const[transactionDate, settransactionDate] = useState(currentDate);
  
  useEffect (() => {
    setBalance(balance);
  }, [balance]);
 
  const updateBalance = (value, e) => { 
    e.preventDefault();
      if(e.target.id === "add"){
         balance = balance + parseInt(value);
         setMode("add");
         settransactionDate(currentDate);
        }
      if(e.target.id === "sub"){
        balance = balance - parseInt(value);
        setMode("sub");
        settransactionDate(currentDate);
      }
      
      setBalance(balance);
  };

  return (
    <div className="App">
      <h2>Expense Tracker - Basic</h2>
      <TransactionsMaker onClick = {updateBalance} balance={balance}/>
      {balance}
      <TransactionsTracker balance={balance} mode={mode}  transactionDate = {transactionDate}/>
    </div>
  );
}

export default App;
