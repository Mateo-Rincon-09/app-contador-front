import { Link } from "react-router-dom"
import "../styles/home.css";


export const HomePage = () => {

    return (
        <div>
            <header className="header-home">
                <div className="nav-home">
                    <Link to="/login">Iniciar sesion</Link>
                    <Link to="/register">Registrarse</Link>
                </div>


                <img src="logo.svg" />

            </header>
            <div className="body-container-home">

                <div className="body-home">
                    <h1 className="body-title-home"> Control de gastos familiar </h1>
                    <p className="body-text-home">
                        La aplicación Control de Gastos Familiar es una herramienta diseñada para
                        ayudar a las personas a administrar mejor su dinero de forma simple y clara.
                        Surge de la necesidad de muchas familias que no tienen control sobre sus
                        gastos mensuales, no diferencian entre gastos fijos y diarios, y no cuentan
                        con metas de ahorro definidas, lo que hace que frecuentemente vivan al día sin
                        saber cuánto dinero realmente les queda disponible.
                        <span className="body-home-highlight"> Esta aplicación permite a los usuarios registrar sus ingresos y gastos diarios,
                            visualizar fácilmente cuánto dinero tienen disponible y establecer metas de
                            ahorro que los ayuden a mejorar su organización financiera</span>. Además, ofrece
                        alertas para mantener al usuario informado sobre su situación económica.
                        <span className="body-home-highlight"> A diferencia de otras aplicaciones financieras, esta herramienta utiliza
                            categorías adaptadas al contexto local, como arriendo, mercado, transporte,
                            Nequi, Daviplata, colegio, salud o deudas, en lugar de términos financieros
                            complejos</span>. También permite personalizar categorías según las necesidades de
                        cada familia.
                        El objetivo principal es ofrecer una solución sencilla, intuitiva y fácil de
                        usar, pensada para cualquier persona, incluso sin conocimientos financieros.
                    </p>

                </div>
                <div className="planes-container-home">

                    <div className="plan-card-home">
                        <div className="plan-title-home">Plan Pro</div>
                        <div className="plan-price-home">$10.000 / mes</div>
                        <div className="plan-list-home">
                            ✔ Registrar ingresos <br />
                            ✔ Registrar gastos <br />
                            ✔ Ver balance <br />
                            ✔ Categorías personalizadas <br />
                            ✔ Historial mensual <br />
                            ✔ Metas de ahorro <br />
                            ✔ Alertas <br />
                            ✔ Reportes
                        </div>
                        <Link to="/register"><button className="button-home">Comenzar</button></Link>
                    </div>

                    <div className="plan-card-home">
                        <div className="plan-title-home">Plan Gratis</div>
                        <div className="plan-price-home">$0</div>
                        <div className="plan-list-home">
                            ✔ Registrar ingresos<br />
                            ✔ Registrar gastos<br />
                            ✔ Ver balance
                        </div>
                        <Link to="/register"><button className="button-home">Comenzar</button></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}