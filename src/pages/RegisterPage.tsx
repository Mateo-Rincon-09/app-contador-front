import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { AuthRegisterRequest, registerAuth } from "../api/auth/authApi"
import { useUserContext } from "../context/UserContext"
import { showServiceError } from "../services/errorHandler.service"
import "../styles/login-register.css";

interface RegisterFormFields {
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    accept: boolean;
}

export const RegisterPage = () => {

    const [userFields, setUserFields] = useState<RegisterFormFields>({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        accept: false
    });

    const { userActions } = useUserContext()
    const navigate = useNavigate()

    const registerMutation = useMutation({
        mutationFn: (value: AuthRegisterRequest) => registerAuth(value),
        onSuccess: (data) => {
            userActions.loginUser(data.user, data.token)
            navigate("/user")
        },
        onError: (error) => {
            showServiceError(error, "Error al registrar usuario");
        },
    })

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (userFields.password !== userFields.confirmPassword) {
            showServiceError(new Error("Las contraseñas no coinciden"), "Error al registrar usuario");
            return;
        }

        registerMutation.mutate({
            name: userFields.name,
            lastName: userFields.lastName,
            email: userFields.email,
            password: userFields.password,
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-auth">
                <Link to="/" className="back-home">← Volver al inicio</Link>
                <h2>Registrate</h2>

                <label>Nombre</label>
                <input
                    type="text"
                    value={userFields.name}
                    onChange={event => setUserFields({ ...userFields, name: event.target.value })}
                />

                <label>Apellido</label>
                <input
                    type="text"
                    value={userFields.lastName}
                    onChange={event => setUserFields({ ...userFields, lastName: event.target.value })}
                />

                <label>Email</label>
                <input
                    type="text"
                    placeholder="tucorreo@gmail.com"
                    value={userFields.email}
                    onChange={event => setUserFields({ ...userFields, email: event.target.value })}
                />

                <label>Contraseña</label>
                <input
                    type="password"
                    value={userFields.password}
                    onChange={event => setUserFields({ ...userFields, password: event.target.value })}
                />

                <label>Confirmar contraseña</label>
                <input
                    type="password"
                    value={userFields.confirmPassword}
                    onChange={event => setUserFields({ ...userFields, confirmPassword: event.target.value })}
                />

                <label>
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={userFields.accept}
                        onChange={event => setUserFields({ ...userFields, accept: event.target.checked })}
                        required
                    />
                    Acepto los <Link to="#">Términos y condiciones</Link>
                </label>

                <button type="submit">Registrarme</button>
                <p>
                    ¿Ya tienes cuenta? <Link to="/login">Login</Link>
                </p>

            </form>
        </div>
    )
}