import React, { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import "../Expenses/ExpenseItem.css";
import "../Expenses/ExpenseDate.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Atualizado');
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Troca Nome</button>
        </Card>
    );
}
export default ExpenseItem;
