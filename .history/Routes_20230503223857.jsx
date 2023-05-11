import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


import App from './src/App';

export default function BaseRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/sample-form' replace />} />
                <Route path='./src/App.jsx' exact element={<App/>} />
            </Routes>
        </BrowserRouter>
    );
}