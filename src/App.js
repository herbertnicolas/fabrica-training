import React from "react";
import Expense from "./components/Expenses/Expense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
import Card from "./components/UI/Card";

function App(props) {
    function addExpenseHandler(expense){
        console.log('In App.js');
        console.log(expenses);
    }
    return (
        <div>       
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expense items={expenses}/>
        </div>
    );
}

export default App;
