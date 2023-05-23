import React from 'react';
import styles from './App.module.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainRoutes } from './routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <Header/>
        <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
