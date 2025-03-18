
import styles from './home.module.css';
import stylesApp from '../../../main/App.module.css';
import Button from "../../components/button/button";
import {magnifyingGlass, plus} from "../../../shared/constants/svg-path";
import {useNavigate} from "react-router-dom";
import React from "react";

export function Home(){

    const navigate = useNavigate();

    async function handleClickButtonNewSchedule(e: React.MouseEvent<HTMLButtonElement>){
        navigate('/seleciona-mes');
    }

    return (
        <div className={stylesApp.contentFlex}>
        
        <h2 className={styles.titulo}>Bem Vindo</h2>

            <div className={stylesApp.cardContainer}>
                <Button title={"Nova Escala"} handleClick={handleClickButtonNewSchedule} path={plus}/>
                <Button title={"Cadastro de Coroinhas"} path={magnifyingGlass}/>
            </div>
            
        </div>
    );
}