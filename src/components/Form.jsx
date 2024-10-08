import { useState } from "react"
import {toast,Toaster} from "react-hot-toast"

function Form({close}){
const [title , setTitle ] = useState("")
const [description , setDescription ] = useState("")
const [error  , setError ] = useState("false")

const handleForm =(event) => {
    event.preventDefault ()
    if (title == ""&& description == ""){
        setError(true)
    }
    else { 
        setError(false)
    }

     const newNote ={
        id:Date.now(),
        title:title, 
        description:description
     }
const getData = localStorage.getItem("data")
let data = getData ? JSON.parse(getData): []
data = [...data , newNote]


     localStorage.setItem("data", JSON.stringify(data))
     toast.success("Note saved sucesfully", {
        position:"top-right"
     })
}
return <div className="bg-black bg-opacity-80 h-screen absolute w-full top-0">

<div className="flex justify-center  mt-10 pt-20">
    {/* <h1>This is form</h1> */}
    <form className="bg-yellow-200 border-2 border-black     p-3 sm: w-[400px] h-[500px]">
    <i onClick={close} class="fa-solid fa-x text-3xl "></i>
    {
        error == true ? <p className="text-red-500"> Fadlan formka soo buuxi</p>
        :""
    }
    <br/>
        <input value={title}  onChange={(event) => setTitle(event.target.value) } className="w-[350px] my-3 h-[40px] " type="text" placeholder="Enter title" />
<br/>
        <textarea value={description}  onChange={(event) => setDescription(event.target.value) } className="border-2 border-black w-[350px]  " rows={8} cols={46}></textarea>
        <br/>
        <button onClick={handleForm} className="bg-black text-white px-[150px] my-5 py-2 text-3xl rounded">Save</button>
    </form>
</div>
<Toaster/>
</div>
}
    export default Form
