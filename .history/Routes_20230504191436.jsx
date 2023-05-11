import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CitizenHome from './components/Citizen/Home';
import AllTransac from './NavBar_Data/AllTransac';


import App from './src/App';

export default function BaseRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CitizenHome/>} />
                <Route path='/Transaction' element={<AllTransac/>} />
                <Route path='/Home' element={<App/>} />
                <Route path='/' element={<App/>} />
            </Routes>
        </BrowserRouter>
    );
}