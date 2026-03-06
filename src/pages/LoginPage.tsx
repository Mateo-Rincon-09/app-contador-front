import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const user = () => {
    if (name && email && password) {
      navigate("/user");
    }
  };

  return (
    <div>
      <form className="form">
        <h2>Iniciar sesión</h2>

        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="tucorreo@gmail.com"
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
  );
};
