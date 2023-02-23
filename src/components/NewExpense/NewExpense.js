import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';

function NewExpense(props){
    const onEnteredDataHandler = (dadosSubmetidos) => {
        const dados = {
            ...dadosSubmetidos,
            id: Math.random().toString()
        };
        console.log("DADOS: ", dados);
        props.onAddExpense(dados);
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onEnteredData={onEnteredDataHandler}/>
            
        </div>
    )
}
export default NewExpense;