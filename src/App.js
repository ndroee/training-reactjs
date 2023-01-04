import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "asu", amount: 1212.121, date: new Date(2022, 2, 2) },
    { title: "ran", amount: 21212.121, date: new Date(2022, 2, 2) },
    { title: "si", amount: 3434.121, date: new Date(2022, 2, 2) },
    { title: "asuransi", amount: 165656212.121, date: new Date(2022, 2, 2) },
    
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
