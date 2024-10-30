import './App.css';
import { useState } from 'react';
import ChildComponentA from './ChildComponentA';

function App() {
  
  const [inputValue, setInputValue] = useState("A");

  return (
    <div className="App">
      APP Component<br />
      {inputValue}
      <ChildComponentA inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}

export default App;
