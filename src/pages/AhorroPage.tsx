import { useState } from "react"
import { Link } from "react-router-dom"
import { formatNum } from '../services/formatNum';

export const AhorroPage = () => {

    const [meta, setMeta] = useState<number>(0)

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        setMeta(0);
    }


    return (
        <div className="dashboard-container">
            <form className="dashboard-form" onSubmit={handleSubmit}>

                <h2>Plan de ahorro</h2>
                <label>Agrega el monto (COP)</label>
                <input
                    type="number"
                    value={formatNum(meta)}
                    onChange={(event) => {
                        const value = event.target.value.replace(/\./g, "")
                        setMeta(Number(value))
                    }}
                />

                <button type="submit">Agregar</button>


                <Link to="/user">Pagina Principal</Link>


                
            </form>
        </div>
    )
}