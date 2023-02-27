import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
        
    const [submittedTitle, setSubmittedTitle] = useState("");
    const [submittedAmount, setSubmittedAmount] = useState("");
    const [submittedDate, setSubmittedDate] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(submittedDate);

        //criando constante que vai ser o objeto com todas as informaçoes passadas pelo usuario
        const dataToSubmit = {
            title: submittedTitle,
            amount: submittedAmount,
            date: new Date(submittedDate),
        };
        //acessando a funçao via props implementada em OUTRO componente
        //essa funçao é responsavel por atribuir ids random a cada objeto
        props.onEnteredData(dataToSubmit); 
        
        console.log(dataToSubmit);
    };

    const amountChangeHandler = (event) => {
        setSubmittedAmount(event.target.value);
    };
    const titleChangeHandler = (event) => {
        setSubmittedTitle(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setSubmittedDate(event.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                    type="text" 
                    value={submittedTitle}
                    onChange={titleChangeHandler} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="text"
                        min="0.01"
                        step="0.01"
                        value={submittedAmount}
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2000-01-01"
                        max="2100-01-01"
                        value={submittedDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;
