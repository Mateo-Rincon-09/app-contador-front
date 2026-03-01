import { useState } from "react"
import { Link } from "react-router-dom"


export const RegisterPage = () => {

    const [name, setName] = useState("")
    const [lastName, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [, setError] = useState("")
    const [accept, setAccept] = useState(false)

    const handleSubmit = async ( event: React.SyntheticEvent ) => {
        event.preventDefault();
        
        if( password !== confirm ) {
            setError('Las contraseñas no coinciden');
            return;
        }

        if( !accept ){
            setError('Debes aceptar los terminos y condiciones');
            return
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <h2>Registarse</h2>

                <label>Name</label>
                <input
                    type="name"
                    value={name}
                    onChange={name => setName(name.target.value)}
                    required
                />

                <label>Last Name</label>
                <input
                    type="lastName"
                    value={lastName}
                    onChange={lastName => setLastname(lastName.target.value)}
                />

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={email => setEmail(email.target.value)}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={password => setPassword(password.target.value)}
                    required
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirm}
                    onChange={confirm => setConfirm(confirm.target.value)}
                    required
                />

                <label>
                <input
                    type="checkbox"
                    checked={accept}
                    onChange={accept => setAccept(accept.target.checked)}
                    required
                />
                Acepto los <Link to="#">teminos y condiciones</Link>
                </label>

                <button>Registrarme</button>

                <p>
                    ¿Ya tienes cuenta? <Link to="/login">Login</Link>
                </p>
                <p>
                    <Link to="/">Home</Link>
                </p>
            </form>
        </div>
    )
}