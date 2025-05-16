import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useUser } from '../Context/UserContext';

export default function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const { setUser } = useUser(); // opcional, si deseas loguear directamente tras registrarse
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // 🚀 En el futuro: enviar datos al backend
    console.log('Sign Up Info (ready for backend):', form);

    // Ejemplo si decides iniciar sesión automáticamente:
    // setUser({ name: form.name, email: form.email });

    navigate('/');
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="left-content">
          <div className="logo-group">
            <img src="https://flagcdn.com/w320/de.png" alt="German flag" className="flag" />
            <h1 className="logo">EINFACH<span className="highlight">DEUTSCH</span></h1>
          </div>
          <div className="welcome-block">
            <h2 className="welcome-title">Willkommen!</h2>
            <p className="welcome-text">
              Time to pick up where you left off. <br />
              Log in and continue learning!
            </p>
            <button className="sign-in-btn" onClick={() => navigate('/')}>
              SIGN IN
            </button>
          </div>
        </div>
      </div>

      <div className="right-section">
        <h2 className="signup-title">SIGN UP</h2>
        <p className="signup-text">Use your email to sign up</p>
        <form className="form" onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-btn">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}
