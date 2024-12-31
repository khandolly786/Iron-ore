import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className='content'>
        <h1>WELCOME TO THE IRON ORE CLASSIFICATION</h1>
        </main>
      <div style={{display: 'flex'}}>
     <Sidebar />
      <Dashboard/>
    </div>
    </div>
   
  );
};

export default App;