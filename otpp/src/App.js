import { useEffect, useRef, useState } from 'react';
import './App.css';

const OTP_DIGITS_COUNT = 5;

function App() {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS_COUNT).fill(""));
  const refArr = useRef([]);

  useEffect(()=>{
    refArr.current[0]?.focus()
  },[])

  const handleOnChange = (value, index) => {
    if (isNaN(value)) {
      return;
    }
    const newValue=value.trim()
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index+1]?.focus()
  };

  const handleonkeyDown=(e,index)=>{
    if(e.key==="Backspace"){
      refArr.current[index-1]?.focus()
    }
  };

  return (
    <div className="App">
      <h1>Validate OTP</h1>
      {inputArr.map((input, index) => (
        <input
          className="otp-input"
          key={index}
          type="text"
          value={inputArr[index]}
          ref={(el) => (refArr.current[index] = el)}
          onChange={(e) => handleOnChange(e.target.value, index)}
          onKeyDown={(e)=> handleonkeyDown(e,index)}
        />
      ))}
    </div>
  );
}

export default App;
