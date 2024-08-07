import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {

  const fetchUserDetails = async()=>{
    const dataResponse = await fetch("")
  }

  useEffect(()=>{
    /**user detail */
  })
  return (
    <>
    <Header/>
    <main className='min-h-[calc(100vh-110px)]'>
      <Outlet/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
