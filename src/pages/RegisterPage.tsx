import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthRegisterRequest, registerAuth } from "../api/auth/authApi"
import { useMutation } from "@tanstack/react-query"
import { showServiceError } from "../services/errorHandler.service"
import { useUserContext } from "../context/UserContext"
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

        registerMutation.mutate({
            name: userFields.name,
            email: userFields.email,
            password: userFields.password,
            confirmPassword: userFields.confirmPassword
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <h2>Registrate</h2>

                <label>Name</label>
                <input
                    type="text"
                    value={userFields.name}
                    onChange={event => setUserFields({ ...userFields, name: event.target.value })}
                />

                <label>Last Name</label>
                <input
                    type="text"
                    value={userFields.lastName}
                    onChange={event => setUserFields({ ...userFields, lastName: event.target.value })}
                />

                <label>Email</label>
                <input
                    type="text"
                    value={userFields.email}
                    onChange={event => setUserFields({ ...userFields, email: event.target.value })}
                />

                <label>Password</label>
                <input
                    type="password"
                    value={userFields.password}
                    onChange={event => setUserFields({ ...userFields, password: event.target.value })}
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    value={userFields.confirmPassword}
                    onChange={event => setUserFields({ ...userFields, confirmPassword: event.target.value })}
                />

                <label>
                    <input
                        type="checkbox"
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
                <p>
                    <Link to="/">Home</Link>
                </p>
            </form>
        </div>
    )
}