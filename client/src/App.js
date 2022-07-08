import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {

  const [listOfTransactions, setListOfTransactions] = useState([
    {userHash: "001", transactionHash: "002"}
  ]);

  useEffect(() => {
    Axios.get("http://localhost:3000/getTransactions").then((response) => {
      setListOfTransactions(response.data);
    })
  }, []);

  return (
    <div className="App">
      <div className="TransactionDisplay">
        {listOfTransactions.map((transaction) => {
          return (
            <div> 
              <h1>UserHash: {transaction.userHash}</h1>
              <h1>TransHash: {transaction.transactionHash}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
