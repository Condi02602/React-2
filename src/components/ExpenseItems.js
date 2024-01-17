import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Cards from "./Cards";

function ExpenseItem(props){

   return (
    <Cards className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item_description">
            <h2>{props.title}</h2>
            <div className="expense-item_price">{props.amount}
            </div>
        </div>
    </Cards>
   );
}

export default ExpenseItem