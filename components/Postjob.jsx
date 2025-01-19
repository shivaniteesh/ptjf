import React from "react";
import '../styles/Postjob.css'
function Postjob(){
    return(
        <div className="Postjob-container">
    
            <form id="form">
    <label htmlFor="companyName" id="label">Company/Store Name:</label>
    <input type="text" id="companyName" name="companyName" className="input" required />
 
    <label htmlFor="workingHours" id="label">Working Hours:</label>
    <input type="text" id="workingHours" name="workingHours" className="input" required />

    <label htmlFor="fromdate" id="label">From Date:</label>
    <input type="date" id="date" name="date" className="input" required />
    <label htmlFor="todate" id="label">To Date:</label>
    <input type="date" id="date" name="date" className="input" required />

    <label htmlFor="totalPay" id="label">Total Pay(in Rupees):</label>
    <input type="number" id="totalPay" name="totalPay" step="0.01" className="input" required />

    <label htmlFor="address" id="label">Address:</label>
    <textarea id="address" name="address" rows="4" className="input" required></textarea>


  <button type="submit" id="but">Submit</button>
</form>
            
        </div>
    );
}
export default Postjob;