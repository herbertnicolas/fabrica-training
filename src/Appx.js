import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
import Card from "./components/UI/Card";

function App() {
    return (
        <Card className="expenses">
            <h2>Let's get started!</h2>
            <p>This is also a content</p>
            <ExpenseItem
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
            ></ExpenseItem>
            <NewExpense/>
        </Card>
    );
}

export default App;
