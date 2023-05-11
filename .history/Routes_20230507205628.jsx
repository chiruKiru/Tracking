import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CitizenHome from './components/Citizen/Home';
import AllTransac from './NavBar_Data/AllTransac';
import Request_one from './components/Citizen/Request_one';
import App from './src/App'
import StateHome from './components/State_government/StateHome'
import RequestList from './components/State_government/RequestList';
import MakeRequest from './components/State_government/MakeRequest';
import { StartShipment } from './components';
import StatePending from './components/State_government/StatePending';

export default function BaseRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/Transaction' element={<AllTransac/>} />
                <Route path='/Home' element={<CitizenHome/>} />
                <Route path='/NAA' element={<Request_one/>} />
                <Route path='/Re' element={<RequestList/>} />
                <Route path='/state' element={<StateHome/>} />
                <Route path='/state-request' element={<MakeRequest/>} />
                <Route path='/state-approve' element={<StartShipment/>} />
                <Route path='/state-request-list' element={</>} />
            </Routes>
        </BrowserRouter>
    );
}