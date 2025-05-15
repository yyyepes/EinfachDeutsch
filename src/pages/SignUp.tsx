import { useState } from 'react';
import './SignUp.css';

export default function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up Info:', form);
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
            Time to pick up where you left off. <br />Log in and continue learning! </p>
  <button className="sign-in-btn">SIGN IN</button>
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
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit" className="signup-btn">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}
