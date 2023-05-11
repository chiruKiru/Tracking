import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


import App from './src/App';

export default function BaseRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/Transaction' element={<App/>} />
            </Routes>
        </BrowserRouter>
    );
}