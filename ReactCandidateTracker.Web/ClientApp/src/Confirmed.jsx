import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Confirmed = () => {
    const [confirmed, setConfirmed] = useState([]);

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get('/api/candidatetracker/getall');
            setConfirmed(data.filter(c => c.registrationStatus === 'Confirmed'));
      
        }

        getCandidates();
    }, []);

    const [showNotes, setShowNotes] = useState(true);

    const toggleNotes = () => {
        setShowNotes(!showNotes);
    };

    return (
        <div className="container" style={{ marginTop: '80px' }}>
            <div>
                <h1>Confirmed</h1>
                <div>
                    <button className="btn btn-success" onClick={toggleNotes}>
                        Toggle Notes
                    </button>
                    <table className="table table-hover table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                {showNotes && <th>Notes</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {confirmed.map(candidate => (
                                <tr key ={candidate.id}>
                                    
                                    <td>{candidate.firstName}</td>
                                    <td>{candidate.lastName}</td>
                                    <td>{candidate.phoneNumber}</td>
                                    <td>{candidate.email}</td>
                                    {showNotes && <td>{candidate.notes}</td>}
                                </tr>

                            ))
                            }

                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Confirmed;