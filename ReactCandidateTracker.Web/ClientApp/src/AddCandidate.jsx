
import React, { useState, } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCount } from './CountContextComponent';

const AddCandidate = () => {


    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const[phoneNumber, setPhoneNumber] =useState('');
    const [email, setEmail] = useState('');
    const [notes, setNotes] = useState('');
    const {refreshCounts} = useCount();
   
    const onSubmitClick = async () => {
        await axios.post('/api/candidatetracker/add', {
            firstName, lastName, phoneNumber, email, registrationStatus : 'Pending', notes
        });
        await refreshCounts();
        navigate('/');
    }
  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-6 offset-md-3">
          <div className="card card-body bg-light">
            <h4>Add Candidate</h4>
            
              <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" name="firstName" placeholder="First Name" className="form-control" /><br />
              <input value={lastName} onChange={e => setLastName(e.target.value)}type="text" name="lastName" placeholder="Last Name" className="form-control" /><br />
              <input value={email} onChange={e => setEmail(e.target.value)}type="text" name="email" placeholder="Email" className="form-control" /><br />
              <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}type="text" name="phoneNumber" placeholder="Phone Number" className="form-control" /><br />
              <textarea value={notes} onChange={e => setNotes(e.target.value)}rows="5" className="form-control" name="notes"></textarea><br />
              <button onClick={onSubmitClick} className="btn btn-primary">Submit</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCandidate;
