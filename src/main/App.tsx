import React from 'react';
import styles from './App.module.css';
import { Footer } from '../presentation/components/footer/footer';
import { Header } from '../presentation/components/header/header';
import { MainRoutes } from './routes/MainRoutes';
import {ServiceProvider} from "../presentation/context/use-case.provider";

function App() {
  return (
    <div className="App">
      <Header/>
        <ServiceProvider>
            <MainRoutes/>
        </ServiceProvider>
      <Footer/>
    </div>
  );
}

export default App;
