import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const UseStateEmp = ()=>{

    const  [count, setCount] = useState(0);
    const  [countminus, setCountMinus] = useState(0);
    
    const Increase =()=>{
        setCount(count + 1)
    }

    const Decrease =()=>{
      if(countminus > 0){
        setCountMinus(countminus -1)
      }
       
    }

//     useEffect(()=>{
// alert("check the function")
//     }, [count])

    return(
        <>
<Button onClick={Increase}>Increase</Button>
<span>{count}</span>
<Button onClick={Decrease}>Decrease</Button>

        
        </>
    )
}

export default UseStateEmp;