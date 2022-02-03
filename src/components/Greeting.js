import { useState } from "react"

const Greeting = ()=>{

    const [changedText, setChangedText] = useState(false)
    const changeTextHandler = ()=>{
        setChangedText(true)
    }

    return <div>
        <h2>Hello world</h2>
        {!changedText && <p>Proud to see you here!</p>}
        {changedText && <p>Changed!</p>}
        <button onClick={changeTextHandler}>Change text</button>
    </div>
}

export default Greeting