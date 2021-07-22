import { useState } from "react";
import states from '../Data/states';
import universities from '../Data/universities';
import grievances from '../Data/grievances';

const NewGrievance = () => {
    const abc = typeof window !== "undefined" ? window.sessionStorage.getItem('token') : null;
    console.log(abc)
    const [pretainsUnder, setPretainsUnder] = useState("");
    const [selected, setSelected] = useState(false);

    return (
        <>
         <p style={{margin:"20px 0"}}>* = Mandotary Field</p>
    <form>
<center> 
    <div className="form-floating">
<table>
 <tr>
     <td>
<h6> Grievance Pertains to: *</h6>
</td>
<td>
<div className="form-check form-check-inline">
 <input className="form-check-input" checked={pretainsUnder === 'state'} onChange={() => setPretainsUnder('state')} type="radio" name="grievance_under" value="state" />
 <label className="form-check-label" for="inlineRadio1">State</label>
</div>
<div className="form-check form-check-inline">
 <input className="form-check-input" checked={pretainsUnder === 'university'} onChange={() => setPretainsUnder('university')} type="radio" name="grievance_under" value="university" />
 <label className="form-check-label" for="inlineRadio2">University</label>
</div>
<div className="form-check form-check-inline">
 <input className="form-check-input" checked={pretainsUnder === 'department'} onChange={() => setPretainsUnder('department')} type="radio" name="grievance_under" value="department" />
 <label className="form-check-label" for="inlineRadio2">Department</label>
</div>
</td>
</tr>
<br/>
<tr>
<td><h6> Select state : *</h6></td> 
<td><select className="form-select" aria-label="Default select example">
 <option selected="selected" value="NA">Select State</option>
 {states.map((state, i) =>
   <option key={i} value={state}>{state}</option>
 )}
</select>
</td>
</tr>
<br/>
<tr style={{display: pretainsUnder === "university" ? "" : "none"}}>
 <td className="styleleft" align="left" valign="top" width="300px">
     <h6> University : * </h6></td>
 <td >
<select className="form-select" aria-label="Default select example" name="ctl00$bps_homeCPH$MainTab$tblloadge$drpunivesity" id="">
<option selected="selected" value="NA">Select University</option>
{universities.map((university, i) =>
   <option key={i} value={university}>{university}</option>
 )}
</select>
</td>
</tr>

<br/>
<tr>
 <td className="styleleft" align="left" valign="top" width="300px">
    <h6> Nature of Grievance :*</h6></td>
 <td className="styleleft" align="left" width="550px">
     <div id="ctl00_bps_homeCPH_MainTab_tblloadge_UpdatePanel10">
<select className="form-select" aria-label="Default select example" name="" id="">
<option selected="selected" value="NA">Select nature of grievance</option>
{grievances.map((grievance, i) =>
   <option key={i} value={grievance}>{grievance}</option>
 )}
</select>
</div>
</td>
</tr>
<tr>
 <td className="styleleft" align="left" valign="top" width="300px">
    <h6> Please Enter the Grievance Description upto 4000 characters : *</h6></td>
    <td>
 <textarea className="form-control" placeholder="Description" id="floatingTextarea2" style={{height: "100px"}}></textarea>

</td>
</tr>


<tr>
 <td className="styleleft" align="left" valign="top" width="300px">
     <h6> Have you Earlier Lodged the grievance to the above Organization/Institutions on the Same subject : *</h6></td>
  



 <td>
     <div className=" form-check-inline">
         <input className="form-check-input" type="radio" name="lodged_earlier" value="yes"/>
         <label className="form-check-label" for="inlineRadio4"> Yes</label>
       </div>
       <div className=" form-check-inline">
         <input className="form-check-input" type="radio" name="lodged_earlier" value="no"/>
         <label className="form-check-label" for="inlineRadio5">No</label>
       </div>
 </td>
</tr>


<tr>
 <td><label for="formFileLg" className="form-label"><h6>Do you want to Upload any PDF/Attachment ?</h6></label></td>

 <td><input className="form-control form-control" id="formFileLg" type="file" /></td>
</tr>

<tr>
 <td>
<h5>DECLARATION :</h5><br/>
</td>
<td>
<div className="form-check">
 <input className="form-check-input" type="checkbox" checked={selected} onChange={() => setSelected(!selected)} id="flexCheckChecked" />
 <label className="form-check-label" for="flexCheckChecked">
   I Hereby stated that the facts mentioned above are true to the best of my Knowledge and belief.
 </label>
 </div>
 </td>
 </tr>
 <tr>
     <td>    
         
     </td>
     <td>
         <div>
             <button style={{marginRight: "10px"}} disabled={!selected} className="btn btn-success" type="submit">Submit</button>
           
             <button className="btn btn-danger" type="button">Close</button>
           </div>
     </td>
 </tr>

</table></div>
</center>
</form>   
        </>
    )
}

export default NewGrievance
