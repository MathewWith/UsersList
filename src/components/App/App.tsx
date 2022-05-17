import React, { useEffect } from 'react';
import Header from '../Header';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.scss';
import AddUpdateUser from '../AddUpdateUser';
import UsersList from '../UsersList';
import { useActions } from 'src/hooks/useActions';

function App() {
  
  const {getUsers} = useActions()
    useEffect(() => {
        const getUsersData = async () => {
            await getUsers()
        }

        getUsersData()
    }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<UsersList />}/>
          <Route path='/users/:id/update' element={<AddUpdateUser />}/>
          <Route path='/users/create' element={<AddUpdateUser />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
