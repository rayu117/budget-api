import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { apiURL } from "./util/apiURL";
import NavBar from "./Components/NavBar"
import axios from "axios"

const API_BASE = apiURL();

function App() {
  const [transactions, setTransactions] = useState([])

  const addTransaction = (newTransaction) => {
    axios.post(`${API_BASE}/transactions`, newTransaction).then((res) =>{
      setTransactions([...transactions, newTransaction])
    }).catch((error) =>{
      console.log(error)
    })
  }

const deleteTransaction = (index) => {
  axios.delete(`${API_BASE}/transactions/${index}`).then((res) => {
    const updateArray = [...transactions]
    updateArray.splice(index,1)
    setTransactions(updateArray)
  }).catch((error) => {
    console.log(error)
  })
}

const updateTransaction = (updatedTransaction, index) => {
  axios.put(`${API_BASE}/transactions/:${index}`, updatedTransaction).then((res) =>{
    const updateArray = [...transactions]
    updateArray[index] = updatedTransaction
    setTransactions(updateArray)
  })
}

useEffect(() => {
  axios.get(`${API_BASE}/transactions`)
    .then((response) => {
      const { data } = response
      setTransactions(data)
    })
}, []);

return (
  <div className="App">
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/transactions">
            <Index transactions={transactions} />
          </Route>
          <Route path="/transactions/new">
            <New addTransaction={addTransaction} />
          </Route>
        </Switch>
      </main>
    </Router>
  </div>
);

}
  

export default App;
