import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Travels from './pages/travels/Travels';
import Offerseat from './pages/offerseat/Offerseat';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/travels' element={<Travels />} />
        <Route path='/offerseats' element={<Offerseat />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
