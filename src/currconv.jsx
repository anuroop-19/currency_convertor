import { useState } from "react";
import useCurrdetail from "./hooks/useCurrDetail";
import Inputbox from "./inputbox";
import "./currconv.css"
const Currconv = () => {
    const [fromcurr,setfromcurr]=useState("usd");
    const [tocurr,settocurr]=useState("inr");
    const [fromamt,setfromamt]=useState(0);
    const [convamt,setconvamt]=useState(0);
    const currdetails=useCurrdetail(fromcurr);
    const currencies=Object.keys(currdetails);
    const convert=()=>{
        setconvamt(fromamt*currdetails[tocurr])
    }
    return (  
        <div className="xxx">
        <Inputbox amount={fromamt} setamount={setfromamt} currentcurr={fromcurr} setcurrentcurr={setfromcurr} currencies={currencies} />
        <Inputbox amount={convamt} currentcurr={tocurr} setcurrentcurr={settocurr} currencies={currencies} />
        <button onClick={convert}>Convert</button>
        </div>
    );
}
 
export default Currconv;