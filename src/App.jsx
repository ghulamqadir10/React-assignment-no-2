import { useState } from "react"; //useState is a React Hook that lets you add a state variable to your component and it is important to understand this for react
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // all the logic were writen before return
  // for declaring variable use two names in array and a default useState function
  let [num, setNum] = useState(0); //we declare variable like this  //useState(value to give variable)
  const inc = () => {
    setNum(num + 1);
    console.log(num);
  };
  //decreamwent function
  const dec = () => {
    setNum(num - 1);
    console.log(num);
  };
  if (num < 0) {
    alert(`no less than zero allowed`);
    setNum((num = 0));
  }
  return (
    <>
      <div id="container">
        <div id="centered-div">

        <h1>Counter App</h1>
        <p>{num}</p>
        <button onClick={inc}>Increase</button>
        <button onClick={dec}>decrease</button>
        </div>
      </div>
    </>
  );
}

export default App;
