import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Trim whitespace before checking credentials
    if (credentials.email.trim() && credentials.password.trim()) {
      console.log('User signed in with:', credentials);
      navigate('/Products.jsx', { replace: true }); // ✅ Correct navigation
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Sign In to EliteCycles</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>Sign In</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
      <p>Don't have an account? <span style={styles.link} onClick={() => navigate('/signup')}>Sign Up</span></p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  submitButton: {
    padding: '10px',
    border: 'none',
    backgroundColor: '#063970',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  link: {
    color: '#ff5722',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
    textAlign: 'center',
  },
};

export default SignInPage;
