import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
    const [inputs, setInputs] = useState({
        submittedTitle: '',
        submittedAmount: '',
        submittedData: '',
    }) 

    const titleChangeHandler = (event) => {
        // setInputs({
        //     ...inputs, 
        //     submittedTitle: event.target.value,
        // })

        /* OBS: A forma comentada acima roda corretamente, mas nao é executada 
        instantaneamente. Ela vai pegando os estados um por um */
        setInputs((prevState)=>{ 
            return{ 
                ...prevState, //copiando os valores que já se tem, para alterar apenas um
                submittedTitle: event.target.value,
            }
        })
    }
    const amountChangeHandler = (event) => {
        setInputs({
            ...inputs, 
            submittedAmount: event.target.value,
        })
    }
    const dateChangeHandler = (event) => {
        setInputs({
            ...inputs,
            submittedData: event.target.value,
        })
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" onChange={amountChangeHandler} min="0.01" step="0.01"/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} min="2023-02-15" step="0.01"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;
