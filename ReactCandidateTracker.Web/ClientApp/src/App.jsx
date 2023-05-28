import React from 'react';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddCandidate from './AddCandidate'
import Confirmed from './Confirmed';
import Pending from './pending';
import Refused from './Refused';
import ViewDetails from './ViewDetails';
import { CountContextComponent } from './CountContextComponent';

const App = () => {
    return (
        <CountContextComponent>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/addcandidate' element={<AddCandidate />} />
                    <Route exact path='/confirmed' element={<Confirmed />} />
                    <Route exact path='/pending' element={<Pending />} />
                    <Route exact path='/refused' element={<Refused />} />
                    <Route exact path='pending/viewdetails/:Id' element={<ViewDetails />} />
                </Routes>
            </Layout>
        </CountContextComponent>
    )
}

export default App;