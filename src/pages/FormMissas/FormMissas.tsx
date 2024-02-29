import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./FormMissas.module.css";
import stylesApp from '../../App.module.css';
import { FormMissa } from "./components/form-missa/form-missa";

export function FormMissas() {
    const location = useLocation();
    console.log(location.state);

    const [mes] = useState(location.state.mes);
    const [semana, setSemana] = useState(1);

    return (
        <section className={stylesApp.contentFlex}>
            <h1 className={styles.mes}>{mes}</h1>
            <h2 className={styles.semana}>{semana}º Semana</h2>

            <FormMissa
                date="02/02/2024"
                day="Terça-Feira"
                hour="19:00"
                nameCelebration="Missa Semanal"
                numVacancies={4}
            />
            <FormMissa
                date="02/02/2024"
                day="Terça-Feira"
                hour="19:00"
                nameCelebration="Missa Semanal"
                numVacancies={4}
            />
            <FormMissa
                date="02/02/2024"
                day="Terça-Feira"
                hour="19:00"
                nameCelebration="Missa Semanal"
                numVacancies={4}
            />
            <div className={`${stylesApp.cardContainer}`}>
                <button
                    className={stylesApp.card}
                    type="submit"
                >
                    <span>Próxima Semana</span>
                    <svg
                        className={stylesApp.materialIcons}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
