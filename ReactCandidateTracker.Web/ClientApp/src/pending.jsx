import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const pending = () => {

    const [pending, setPending] = useState([]);
    

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get('/api/candidatetracker/getall');
            setPending(data.filter(c => c.registrationStatus === 'Pending'));
        }

        getCandidates();
    }, []);



  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <table className="table table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>

        {pending.map(candidate => (
                                <tr key={candidate.id}>
                                    <td><Link to={`viewdetails/${candidate.id}`}>View Details</Link></td>
                                    <td>{candidate.firstName}</td>
                                    <td>{candidate.lastName}</td>
                                    <td>{candidate.phoneNumber}</td>
                                    <td>{candidate.email}</td>
                                    </tr>))}
        </tbody>
      </table>
    </div>
  );
};

export default pending;