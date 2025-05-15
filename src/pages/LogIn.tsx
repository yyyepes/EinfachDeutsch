import { useState } from 'react';
import './LogIn.css';

export default function LogIn() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up Info:', form);
  };

  return (
    <div className="login-container">
      <div className="login-left-section">
        <h2 className="login-title">LOG IN</h2>
        <p className="login-text">Use your email and password</p>
        <form className="login-form" onSubmit={handleSignup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="login-input"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-input"
            value={form.password}
            onChange={handleChange}
          />
          <a href="#" className="forgot-link">Forgot your password?</a>
          <button type="submit" className="login-btn">SIGN IN</button>
        </form>
      </div>

      <div className="login-right-section">
        <div className="login-right-content">
          <div className="login-logo-group">
            <img src="https://flagcdn.com/w320/de.png" alt="German flag" className="login-flag" />
            <div className="login-logo-text">
              <span className="login-logo-white">EINFACH</span><span className="login-highlight">DEUTSCH</span>
            </div>
          </div>
          <h2 className="login-welcome-title">Willkommen!</h2>
          <div className="login-cta-group">
            <p className="login-welcome-text">
              Sign up and discover how fun German can be. <br /> </p>
              <p>Learning starts here! </p>
              <button className="login-signup-btn">SIGN UP</button>
         </div>
        </div>
      </div>
    </div>
  );
}
