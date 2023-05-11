import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AllTransac from './NavBar_Data/AllTransac';


import App from './src/App';

export default function BaseRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/Transaction' element={<AllTransac/>} />
                <Route path='/Home' element={<App/>} />
            </Routes>
        </BrowserRouter>
    );
}