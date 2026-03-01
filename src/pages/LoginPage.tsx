import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


export const LoginPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const user = () => {
        if( name ){
            navigate("/user");
        }
    }

    return (
        <div>
            <form className="form">
                <h2>Iniciar sesión</h2>

                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={name => setName(name.target.value)}
                    required
                />
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={email => setEmail(email.target.value)}
                    placeholder="tucorreo@gmail.com"
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={password => setPassword(password.target.value)}
                    required
                />
                <button onClick={user}>Iniciar sesion</button>
                <p>
                    ¿No tienes cuenta? <Link to="/register">Registrarme</Link>
                </p>
                <p>
                    <Link to="/">Home</Link>
                </p>
            </form>
        </div>
    )
}
