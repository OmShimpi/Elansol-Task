import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Show from './components/Show';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/newUser" element={<Signup />} />
          <Route path='/display' element={<Show/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
