import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LogInPage from './pages/loginPage/loginPage';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import DashboardPage from './pages/dashboardPage/dashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/login' element={<LogInPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
