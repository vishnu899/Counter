import { useState, useTransition } from "react"

function Iounter() 


{
     const [num,setnum] = useState(0)

     function addnum()
     {
        var newnum  = num+1
    setnum(newnum)
    }

    function minusnum()
    {
        var newnum = num-1
    setnum(newnum)
    }

    function reset()
    {
        var newnum = 0
        setnum(newnum)
    }

    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center", textAlign:"center",margin:"100px auto 50px"}}>
<div style={{backgroundColor:"indigo",padding:"15px",width:"200px"}}>
    <h1 style={{color:"white"}}>{num}</h1>
    
    <div className="btns" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"15px"}}>

    <svg xmlns="http://www.w3.org/2000/svg" onClick={addnum} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style={{height:"20px",backgroundColor:"green",padding:"5px",color:"white"}}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" onClick={minusnum} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style={{height:"20px",backgroundColor:"red",padding:"5px",color:"white"}}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</div>

<button onClick={reset} style={{marginTop:"15px",padding:"5px",backgroundColor:"orangered"}}>Reset</button>
</div>
</div>
    )
}

export default Iounter