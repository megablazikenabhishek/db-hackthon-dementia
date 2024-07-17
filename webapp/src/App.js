import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import LogInPage from './pages/loginPage/loginPage';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import DashboardPage from './pages/dashboardPage/dashboardPage';
import Login from './components/Login/Login';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<NotFoundPage />}/>
        <Route path='/signin' element={<SignIn />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
