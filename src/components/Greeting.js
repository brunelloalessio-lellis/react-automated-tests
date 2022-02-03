import { useState } from "react"
import Output from './Output';

const Greeting = ()=>{

    const [changedText, setChangedText] = useState(false)
    const changeTextHandler = ()=>{
        setChangedText(true)
    }

    return <div>
        <h2>Hello world</h2>
        {!changedText && <Output text="Proud to see you here!"></Output>}
        {changedText && <Output text="Changed!"></Output>}
        <button onClick={changeTextHandler}>Change text</button>
    </div>
}

export default Greeting