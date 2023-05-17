import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CitizenHome from './components/Citizen/Home';
import AllTransac from './NavBar_Data/AllTransac';
import Request_one from './components/Citizen/Request_one';
import {FileUpload} from './ipfs'
import StateHome from './components/State_government/StateHome'
import RequestList from './components/State_government/RequestList';
import MakeRequest from './components/State_government/MakeRequest';
import StateApprove from './components/State_government/StateApprove';
import MainHome from './src/MainHome';
import CentralHome from './components/Central/CentralHome'

export default function BaseRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/Transaction' element={<AllTransac/>} />
                <Route path='/Home' element={<CitizenHome/>} />
                <Route path='/NAA' element={<Request_one/>} />
                <Route path='/state' element={<StateHome/>} />
                <Route path='/state-request' element={<MakeRequest/>} />
                <Route path='/state-request-list' element={<RequestList/>} />
                <Route path='/state-approve' element={<StateApprove/>} />
                <Route path='/central' element={<CentralHome/>} />
                

            </Routes>
        </BrowserRouter>
    );
}