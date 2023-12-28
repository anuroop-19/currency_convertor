import "./inputbox.css"
const Inputbox = ({amount,setamount,currentcurr,setcurrentcurr,currencies}) => {
    const setamountt=(e)=>{
        setamount(e.target.value)
    }
    const setcurrentcurrr=(e)=>{
        setcurrentcurr(e.target.value)
    }
    return (  
        <div className="input-container">
      <input
        type="number"
        value={amount}
        onChange={setamountt}
        
      />
      <select value={currentcurr} onChange={setcurrentcurrr}>
        <option value="" disabled>
          Select an option
        </option>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
    );
}
 
export default Inputbox;