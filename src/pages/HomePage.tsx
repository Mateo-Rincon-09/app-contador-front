import { useRef } from "react";
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
import "../styles/home.css";

export const HomePage = () => {

    const inicioRef = useRef(null);
    const funcionesRef = useRef(null);
    const planesRef = useRef(null);
    const contactoRef = useRef(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>

            <header className="header-home">

                <div className="header-left">
                    <div className="logo">
                        <div className="logo-icon">F</div>
                        <span className="logo-text">Fintra</span>
                    </div>
                </div>

                <nav className="nav-home">
                    <span onClick={() => scrollToSection(inicioRef)}>Inicio</span>
                    <span onClick={() => scrollToSection(funcionesRef)}>Funciones</span>
                    <span onClick={() => scrollToSection(planesRef)}>Planes</span>
                    <span onClick={() => scrollToSection(contactoRef)}>Contacto</span>
                </nav>

                <div className="header-actions">
                    <Link to="/login" className="btn-login">Ingresar</Link>
                    <Link to="/register" className="btn-primary">Crear cuenta</Link>
                </div>

            </header>

            <div className="body-container-home" >


                <div ref={planesRef} className="body-home">
                    <h1 className="body-title-home">
                        Gestión financiera inteligente para tu hogar
                    </h1>

                    <p className="body-text-home">
                        Centraliza, analiza y optimiza todos tus movimientos financieros desde una sola plataforma.
                        <span className="body-home-highlight">
                            {" "}Obtén control total, visibilidad en tiempo real y toma decisiones más estratégicas con tu dinero.
                        </span>
                    </p>
                </div>


                <div className="planes-container-home">

                    <div className="plan-card-home">
                        <div className="plan-title-home">Plan Pro</div>
                        <div className="plan-price-home">$10.000 / mes</div>
                        <div className="plan-list-home">
                            ✔ Registro ilimitado de ingresos y gastos <br />
                            ✔ Reportes avanzados y análisis financiero <br />
                            ✔ Categorías personalizadas <br />
                            ✔ Metas de ahorro <br />
                            ✔ Alertas inteligentes <br />
                            ✔ Historial completo
                        </div>
                        <Link to="/register">
                            <button className="button-home">Comenzar</button>
                        </Link>
                    </div>

                    <div className="plan-card-home">
                        <div className="plan-title-home">Plan Gratis</div>
                        <div className="plan-price-home">$0</div>
                        <div className="plan-list-home">
                            ✔ Registro básico de ingresos y gastos <br />
                            ✔ Visualización de balance <br />
                            ✔ Historial limitado
                        </div>
                        <Link to="/register">
                            <button className="button-home">Comenzar</button>
                        </Link>
                    </div>

                </div>


                <section ref={inicioRef} className="feature-home">
                    <div className="feature-wrapper">
                        <div className="feature-card">
                            <h2>Automatización financiera inteligente</h2>

                            <p>
                                Fintra automatiza la gestión de tus finanzas para que dejes de depender de registros manuales.
                                Cada ingreso y gasto se organiza automáticamente en categorías claras, permitiéndote mantener
                                un control constante sin esfuerzo.
                            </p>

                            <p>
                                La plataforma identifica patrones en tus movimientos y optimiza la clasificación de tus datos,
                                reduciendo errores y mejorando la precisión de tu información financiera.
                            </p>

                            <p>
                                Recibe actualizaciones en tiempo real y mantén siempre una visión actualizada de tu estado económico,
                                sin necesidad de procesos repetitivos.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="feature-home reverse">
                    <div className="feature-wrapper">
                        <div className="feature-card">
                            <h2>Análisis y control financiero</h2>

                            <p>
                                Convierte tus datos en decisiones inteligentes. Fintra transforma tu información financiera
                                en reportes visuales claros y fáciles de entender, permitiéndote analizar tus hábitos de gasto
                                e identificar oportunidades de mejora.
                            </p>

                            <p>
                                Accede a métricas clave como balance mensual, tendencias de consumo y distribución por categorías,
                                todo en un solo lugar.
                            </p>

                            <p>
                                Obtén control total sobre tu dinero y toma decisiones basadas en datos reales, no en suposiciones.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="feature-home">
                    <div className="feature-wrapper">
                        <div className="feature-card">
                            <h2>Seguridad y confianza</h2>

                            <p>
                                Tu información financiera es uno de tus activos más importantes. Por eso, Fintra implementa
                                estándares modernos de seguridad para garantizar la protección de tus datos en todo momento.
                            </p>

                            <p>
                                Utilizamos prácticas seguras de almacenamiento y acceso para asegurar que tu información
                                esté siempre protegida y disponible solo para ti.
                            </p>

                            <p>
                                Nuestra prioridad es brindarte una experiencia confiable, donde puedas gestionar tu dinero
                                con total tranquilidad.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="features-grid-home">
                    <div className="features-container">

                        <div className="feature-box">
                            <h3>📊 Reportes inteligentes</h3>
                            <p>Visualiza tus finanzas con gráficos claros y fáciles de entender.</p>
                        </div>

                        <div className="feature-box">
                            <h3>⚡ Automatización</h3>
                            <p>Organiza automáticamente tus ingresos y gastos sin esfuerzo manual.</p>
                        </div>

                        <div className="feature-box">
                            <h3>🎯 Metas de ahorro</h3>
                            <p>Define objetivos financieros y haz seguimiento en tiempo real.</p>
                        </div>

                        <div className="feature-box">
                            <h3>🔔 Alertas inteligentes</h3>
                            <p>Recibe notificaciones sobre movimientos importantes.</p>
                        </div>

                    </div>
                </section>


                <section ref={funcionesRef} className="section-home pro">
                    <div className="section-card">
                        <span className="section-tag">Nuestra misión</span>

                        <h2>
                            Transformar la forma en que gestionas tu dinero
                        </h2>

                        <p>
                            Desarrollamos una plataforma enfocada en simplificar la administración financiera
                            personal, permitiéndote tener una visión clara, ordenada y estratégica de tus ingresos
                            y gastos.
                        </p>

                        <p>
                            Nuestro objetivo es eliminar la complejidad tradicional de las finanzas personales,
                            reemplazándola por una experiencia intuitiva, accesible y centrada en el usuario.
                        </p>

                        <p>
                            Creemos que cualquier persona debe poder tomar decisiones financieras informadas
                            sin depender de herramientas complicadas o conocimientos avanzados.
                        </p>

                        <div className="section-stats">
                            <div>
                                <h3>+1000</h3>
                                <span>Movimientos registrados</span>
                            </div>
                            <div>
                                <h3>+500</h3>
                                <span>Usuarios activos</span>
                            </div>
                            <div>
                                <h3>99%</h3>
                                <span>Disponibilidad</span>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-home pro alt">
                    <div className="section-card">
                        <span className="section-tag">Cómo te ayudamos</span>

                        <h2>
                            Control total con una experiencia simple
                        </h2>

                        <p>
                            Integramos tecnología y diseño para ofrecerte una plataforma que centraliza
                            toda tu información financiera en un solo lugar, permitiéndote analizar,
                            organizar y mejorar tu economía personal.
                        </p>

                        <p>
                            Nuestra propuesta no solo se basa en registrar datos, sino en ayudarte a entenderlos,
                            interpretarlos y utilizarlos para tomar mejores decisiones.
                        </p>

                        <div className="section-grid">
                            <div className="section-item">
                                <h4>Claridad</h4>
                                <p>Visualiza tu información de forma simple y estructurada.</p>
                            </div>

                            <div className="section-item">
                                <h4>Control</h4>
                                <p>Gestiona cada movimiento con precisión y seguimiento continuo.</p>
                            </div>

                            <div className="section-item">
                                <h4>Decisión</h4>
                                <p>Toma decisiones financieras basadas en datos reales.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <footer ref={contactoRef} className="footer-home" >

                <div className="footer-container-home">

                    <div>
                        <h3>Fintra</h3>
                        <p>Gestión inteligente de ingresos y gastos.</p>
                    </div>

                    <div>
                        <h4>Contacto</h4>
                        <ul>
                            <li>fintra@gmail.com</li>
                            <li>Medellín, Colombia</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Redes</h4>
                        <div className="socials-home">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTiktok />
                            <FaGithub />
                        </div>
                    </div>

                </div>

                <div className="footer-bottom-home">
                    <p>© {new Date().getFullYear()} Fintra</p>
                    <p>Todos los derechos reservados</p>
                </div>

            </footer>

        </div>
    )
}