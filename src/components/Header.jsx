import { useState } from "react"
import Form from "./Form"

function Header(){
const[isOpen , setIsopen] = useState(false)
const handleOpen =() => {
    setIsopen(true )
}
const handlClose =() => {
    setIsopen(false )
}

        return  <div>
         <div className="flex justify-between px-10 py-4  bg-yellow-500">
        <h1 className="text-3xl text-white">Nooty</h1>
        <button onClick={handleOpen} className="bg-orange-500 px-8 py-3 text-3xl">Add note</button>
    </div>
    {
        isOpen == true ? <Form close={handlClose}/> : ""
    }
    </div>
    
}

export default Header