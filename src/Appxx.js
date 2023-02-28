//QUESTAO 7

// import React from 'react';

// import './App.css';

// // don't change the Component name "App"
// export default function App() {
//     const [msgValidez, setMsgValidez] = React.useState('Invalid')
    
//     function messageChangeHandler(event){
//         const valor = event.target.value;
        
//         if(valor.trim().length >= 3){
//             setMsgValidez("Valid");
//         }else{
//             setMsgValidez("Invalid");
//         }
//     }
//     return (
//         <form>
//             <label>Your message</label>
//             <input type="text" onChange={messageChangeHandler} />
//             <p>{msgValidez} message</p>
//         </form>
//     );
// }


// QUESTAO 8

import React from 'react';

import './App.css';

// don't change the Component name "App"
export default function App() {
    const [numero, setNumero] = React.useState(0)
    
    function onClickHandler(event){
        var valor = event.target.value;
        valor += 1;
        return setNumero(valor);
    }
    
    return (
      <div>
        <p id="counter">{numero}</p>
        <button onClick={onClickHandler}>Increment</button>
      </div>
    );
}
