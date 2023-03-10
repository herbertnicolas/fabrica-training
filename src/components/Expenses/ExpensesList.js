import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {

  return (
    <div>
      {props.items.length === 0 ? (
        <h2 className="expenses-list__fallback">Found no expenses</h2>
      ) : (
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
}
export default ExpensesList;
