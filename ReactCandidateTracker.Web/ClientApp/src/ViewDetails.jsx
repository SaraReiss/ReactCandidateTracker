import React, { useEffect, useState } from 'react'
import { useParams, } from 'react-router-dom'
import axios from 'axios'
import { useCount } from './CountContextComponent';



const ViewDetails = () => {


    const [candidate, setCandidate] = useState([])
    const {refreshCounts} = useCount();


    const { Id } = useParams();
    useEffect(() => {
        const getbyid = async () => {
            const { data } = await axios.get(`/api/candidatetracker/getbyid?Id=${Id}`)
            setCandidate(data)
        }
        getbyid()
    }, [])

    const  hideButtons = () => {
        const button1 = document.getElementById("confirmed");
        const button2 = document.getElementById("refused");
        button1.style.display = "none";
        button2.style.display = "none";
      }

    const onConfirmClick = async () => {

        
        await axios.post('/api/candidateTracker/update', {
           Id, firstName, lastName, email, phoneNumber, notes,  registrationStatus : "Confirmed"
        });
        
        hideButtons();
        await refreshCounts();
        
       
    }



  const onRefuseClick = async () => {
    await axios.post('/api/candidateTracker/update', {
        Id,firstName, lastName, email, phoneNumber, notes,  registrationStatus : "Refused"
    });
    hideButtons();
    await refreshCounts();
   
       
    }

 const { firstName, lastName, email, phoneNumber, registrationStatus, notes} = candidate
  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card card-body bg-light">
            <h4>Name: {firstName} {lastName}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone: {phoneNumber}</h4>
            <h4>Status: {registrationStatus}</h4>
            <h4>Notes:</h4>
            <p>{notes}</p>
            <div>
              <button id="confirmed" onClick={onConfirmClick} className="btn btn-primary">Confirm</button>
              <button id="refused" onClick={onRefuseClick}className="btn btn-danger">Refuse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;