import ExpenseItem from "./components/ExpenseItems";
import Testing from "./components/Testing";
import Expenses from "./components/Expenses"

function App() {

  const expenses = [
    {
      id:"1",
      title:"Toilet paper",
      amount:50.12,
      date:new Date(2020, 7, 1),
    },
    {
      id:"2",
      title:"Sunmayka wood",
      amount:1000.32,
      date:new Date(2023, 10, 3),
    },
    {
      id:"3",
      title:"Bread",
      amount:45.12,
      date:new Date(2022, 1, 5),
    },
    {
      id:"4",
      title:"Milk",
      amount:30.12,
      date:new Date(2023, 9, 1),
    },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also Visible! </p>
      <Expenses items={expenses}></Expenses>
      </div>
  );
}

export default App;
