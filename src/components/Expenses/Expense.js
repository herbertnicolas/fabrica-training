import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import expenses from "./Expenses";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expense(props) {
    const [filteredYear, setFilteredYear] = useState(2023);

    let expensesContent = <div> No expenses found.</div>
    
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        console.log(expense.date.getFullYear().toString());
        console.log("filteredYear:", filteredYear);
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {filteredExpenses.length === 0 ? <h2>Found no expenses</h2> : filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}    
            

            {/* <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            ></ExpenseItem> */}
        </Card>
    );
}
export default Expense;
