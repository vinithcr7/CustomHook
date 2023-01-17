import { useState } from 'react';
import './App.css';
import Textbox from './Common/Textbox';
import { useDebounce } from './Utils/util';

function App() {
  const [textValue, setTextValue] = useState("");
  const textDefferedValue = useDebounce(textValue, 500)

  const ontextChange = (e) => {
    setTextValue(e.target.value);
  }

  console.log(textValue, textDefferedValue);
  return (
    <div className="App">
      <header>
        <Textbox value={textValue} onChange={ontextChange} />
      </header>
      <input type="textarea" value={textDefferedValue} />
    </div>
  );
}

export default App;
