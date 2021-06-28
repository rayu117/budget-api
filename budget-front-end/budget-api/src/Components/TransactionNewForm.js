import { useState } from "react";
import { withRouter } from "react-router-dom";


function TransactionNewForm(props) {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: undefined,
  });

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTransaction(transaction);
    props.history.push("/transactions");
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of transaction"
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="text"
          value={transaction.date}
          placeholder="mm/dd/yyyy"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={transaction.amount}
          placeholder="Enter amount"
          onChange={handleTextChange}
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="Where transaction is from"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(TransactionNewForm);
