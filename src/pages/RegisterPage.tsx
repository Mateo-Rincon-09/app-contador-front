import { useState } from "react"
import { Link } from "react-router-dom"
import { AuthRegisterRequest, registerAuth } from "../api/auth/authApi"
import { useMutation } from "@tanstack/react-query"
import { getServiceMessageError } from "../services/errorHandler.service"


export const RegisterPage = () => {

    const [name, setName] = useState("")
    const [lastName, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [accept, setAccept] = useState(false)

    const registerMutation = useMutation({
        mutationFn: (value: AuthRegisterRequest) => registerAuth(value), 
        onSuccess: (data) => {
            console.log("Usuario registrado:", data);
        },
        onError: (error) => {
            console.log("Error al registrar usuario:", getServiceMessageError(error.message));
        },
    })

    const handleSubmit =  (event: React.SyntheticEvent) => {
        event.preventDefault();

        registerMutation.mutate({
            name,
            email,
            password
        })


    }




    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <h2>Registarse</h2>

                <label>Name</label>
                <input
                    type="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    required
                />

                <label>Last Name</label>
                <input
                    type="lastName"
                    value={lastName}
                    onChange={event => setLastname(event.target.value)}
                />

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirm}
                    onChange={event => setConfirm(event.target.value)}
                    required
                />

                <label>
                    <input
                        type="checkbox"
                        checked={accept}
                        onChange={event => setAccept(event.target.checked)}
                        required
                    />
                    Acepto los <Link to="#">teminos y condiciones</Link>
                </label>

                <button type="submit">Registrarme</button>

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