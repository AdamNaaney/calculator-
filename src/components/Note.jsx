import { useEffect, useState } from "react"


function Note (){
const [data ,setData] =useState([])
useEffect(() => {
    const notes =  JSON.parse(localStorage.getItem("data"))
    if (notes){
    setData(notes)
    } 
})
//  delete note
 const handleDelete = (id) =>{
    const getData = localStorage.getItem("data")
    const data = getData ? JSON.parse(getData) :[]
    const updateNote = data.filter((item) => item.id != id)
    localStorage.setItem("data", JSON.stringify(updateNote))
 }


return <div>

    {/* <h1 className="text-4xl mt-5 text-center"> Hello Note </h1> */}
    <div className="grid mt-5 sm:grid-cols-[300px_300px_300px] justify-center gap-8 ">
        {
          data.length  > 0 ?  data.map((note)=>{
                return <div id="box" className="bg-red-300 w-[300px] h-[200px] rounded ">
                    <h1>{note.title}</h1>
                    <p>{note.description}</p>
                    <button onClick={() => handleDelete (note.id)} id="deletebtn" className="bg-red-500 px-9 hidden rounded mt-10">Delete</button>
                </div>
            })
            :
            <p>There is notes </p>
        }
   
    
    </div>
</div>
}
export default Note