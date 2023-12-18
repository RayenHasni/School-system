import axios  from "axios";
import { useState } from "react";

const SendSms = () => {
    const[phone,setPhone]=useState(null),
         [message,setMessage]=useState(null)
        
    
    
    const sendSms = async()=>{
        await axios.post('http://localhost:8000/sendMessage',{

        })
    }


    const handleChangePhone = (e)=>{
            setPhone(e.target.value)
    }


    return ( 
        <div className="p-5 " id="sendSMS">
        <h3 className="p-2">Send SMS :</h3>
        <div className="w-100 rounded-4" id="SMSform">
          <form>
            <div className="mb-3 p-5">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="phone"
                className="form-control"
                id="phone"
                aria-describedby="emailHelp"
              />
              <label htmlFor="sms " className="form-label pt-3">
                You message:
              </label>
              <div className="form-floating">
              <textarea className="form-control" placeholder="Leave a comment here" id="sms" style={{height: '30vh'}}></textarea>
              <label for="floatingTextarea2">Comments</label>
             </div>
             <button className="btn btn-outline-secondary position-relative  mt-4 "  style={{color:'#6C391B'}}>Send </button>
            </div>

            
          </form>
        </div>
      </div>

     );
}
 
export default SendSms;