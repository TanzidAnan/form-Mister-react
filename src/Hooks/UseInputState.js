import { useState } from "react"

const UseInputState =(defaultValue=null) =>{
    const [value,setValue] =useState(defaultValue);
    const hendleChange =(vle) =>{
        setValue(vle)
    }
    return[value,hendleChange]
}

export default UseInputState