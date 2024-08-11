import { useState } from "react"

function Counter() 
{
    var [num,generatenum] = useState(0)

    function changenum()
    {
        
        generatenum(Math.floor((Math.random() *100)+1))
    }
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"100px auto 50px", backgroundColor:"purple", padding:"15px",width:"300px",borderRadius:"15px"}}>
        <div>
            <h1 style={{color:"white"}}>Generated Number</h1>
            <h1 style={{color:"white", textAlign:"center"}}>{num}</h1>
            <button onClick={()=>changenum()} style={{width:"92%",display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center",backgroundColor:"yellow",padding:"5px",border:"none",borderRadius:"10px"}}>Random Number</button>
        </div>
        </div>
    )
}

export default Counter