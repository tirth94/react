import { useState } from 'react';

import './App.css'

function App() {
   
  let [counter, setCounter] = useState(10)

  // let counter = 10

  

  const addValue = () => {
    if (counter < 20) {
      setCounter((prevCounter) => (prevCounter + 1 > 20 ? 0 : prevCounter + 1));
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter((prevCounter) => (prevCounter - 1 < 0 ? 20 : prevCounter - 1));
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>


      <button onClick={addValue}>add value{counter}</button> <br /> 
      <button onClick={removeValue}>remove value {counter}</button><br />
      {counter}
    </>
  )
}

export default App
