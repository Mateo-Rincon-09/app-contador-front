import { useState } from "react"
import { Link } from "react-router-dom"
import { formatNum } from '../services/formatNum';
import { metaAhorro } from '../interface/interface';


export const AhorroPage = () => {


    const [meta, setMeta] = useState<number>(0)
    const [metaData, setMetaData] = useState<metaAhorro | null>(null)


    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        setMetaData({
            meta: meta,
            progreso: 0,
        })

        setMeta(0);

    }


    return (
        <div className="dashboard-container">
            <form className="dashboard-form" onSubmit={handleSubmit}>

                <h2>Plan de ahorro</h2>
                <label>Agrega el monto (COP)</label>
                <input
                    type="number"
                    value={(meta)}
                    onChange={(event) => setMeta(Number(event.target.value))}
                />

                <button type="submit">Agregar</button>


                <Link to="/user">Pagina Principal</Link>


                <MetaInfo data={metaData} />
            </form>

        </div>
    )
}


export const MetaInfo = ({ data }: { data: metaAhorro | null }) => {
    const [suma, setSuma] = useState<number>();
    const [progreso, setProgreso] = useState<number>(data?.progreso ?? 0);

    if (!data) return null;

    const porcentaje = Math.min((progreso / data.meta) * 100, 100);

    const agregarSuma = () => {
        if (!suma) return;
        setProgreso(progreso + Number(suma));
    };

    return (
        <div className="meta-card">
            <h2>Información de la meta</h2>

            <ul className="meta-list">
                <li>Meta: ${formatNum(data.meta)}</li>
                <li>Progreso: ${formatNum(progreso)}</li>
            </ul>   

            <div className="progress-container">
                <div
                    className="progress-bar"
                    style={{ width: `${porcentaje}%` }}
                ></div>
            </div>

            <p className="progress-text">{porcentaje}%</p>

            <div className="add-money">
                <input
                    type="number"
                    placeholder="Añadir suma"
                    value={(suma)}
                    onChange={(event) => setSuma(Number(event.target.value))}
                />

                <button onClick={agregarSuma}>Añadir</button>
            </div>
        </div>
    );
};