import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import expenses from "./Expenses";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expense(props) {
    const [filteredYear, setFilteredYear] = useState(2023);

    let expensesContent = <div> No expenses found.</div>
    
    const filteredExpenses = props.items.filter((expense) => {
        console.log(expense.date.getFullYear().toString());
        console.log("filteredYear:", filteredYear);
        return expense.date.getFullYear().toString() === filteredYear;
      });

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
  
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesList filtered={filteredExpenses}/>

        </Card>
    );
}
export default Expense;
