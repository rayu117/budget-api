import Transactions from "../Components/Transactions"

function Index({ transactions }) {
  return (
    <div className="Index">
      <h2>Index</h2>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default Index;