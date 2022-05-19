import { useState } from "react"

const Counter = ()=>{

    const [counter , setCounter] = useState(0)

    const handlechange = (value)=>{
        if(value==(-1) && counter==0){
            return
        }
          setCounter(counter + value)
    }
   
    return <div>
         <h2 className={`${counter%2==0 ? "green" : " red"}`} >counter : {counter}</h2>
         <button onClick={()=>{handlechange(1)}}>Add</button>
         <button onClick={()=>{handlechange(-1)}}>Sub</button>
         <button onClick={()=>{setCounter(counter*2)}}>multiply</button>


    </div>
}
export {Counter}