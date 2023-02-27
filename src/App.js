import React, {useState} from "react";
import Expense from "./components/Expenses/Expense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
import Card from "./components/UI/Card";

function App(props) {

    const dados_iniciais = [
        {
            id: "e1",
            title: "Papel Higiênico",
            amount: "94.12",
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "TV nova",
            amount: "799.49",
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            title: "Seguro de automovel",
            amount: "294.67",
            date: new Date(2021, 2, 28),
        }
    ]

    const [expenses, setExpenses] = useState(dados_iniciais);
    console.log(expenses)

    function addExpenseHandler(expense){
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    }
    return (
        <div>       
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expense items={expenses}/>
        </div>
    );
}

export default App;
