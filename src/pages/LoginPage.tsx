import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useUserContext } from "../context/UserContext";
import { AuthLoginRequest, loginAuth } from "../api/auth/authApi";
import { showServiceError } from "../services/errorHandler.service";
import "../styles/login-register.css";


export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();
  const { userActions } = useUserContext();

  const loginMutation = useMutation({
    mutationFn: (value: AuthLoginRequest) => loginAuth(value),
    onSuccess: (data) => {
      userActions.loginUser(data.user, data.token)
      navigate("/user");
    },
    onError: (error) => {
      showServiceError(error, "Error al iniciar sesión");
    }
  })

  const handleSubmit = (event: React.SyntheticEvent) => {

    event.preventDefault();

    loginMutation.mutate({
      email: email,
      password: password
    })

  }

  return (
    <div>
      <form className="form-auth" onSubmit={handleSubmit}>
        <Link to="/" className="back-home">← Volver al inicio</Link>
        <h2>Iniciar sesión</h2>

        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tucorreo@gmail.com"
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Iniciar sesión</button>

        <p>
          ¿No tienes cuenta? <Link to="/register">Registrarme</Link>
        </p>
      </form>
    </div>
  );
};
