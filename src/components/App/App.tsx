import React from 'react';
import Header from '../Header';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.scss';
import AddUpdateUser from '../AddUpdateUser';
import UsersList from '../UsersList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<UsersList />}/>
          <Route path='/add-update-user' element={<AddUpdateUser />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
