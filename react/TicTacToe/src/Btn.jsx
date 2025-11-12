import { useState } from 'react';
import "./App.css";

export default function BoardBtn(handleClick) {
  const [value, setValue] = useState(null);

  return (
    <>
      <button onClick={setValue(handleClick())} className='board'>
        {value}
      </button>
    </>
  )
}