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
    const [counter, setCounter] = React.useState(0)
    
    
    function onClickHandler(event){
        // var valor = event.target.value;
        return setCounter(counter + 1);
    }
    
    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={onClickHandler}>Increment</button>
      </div>
    );
}
