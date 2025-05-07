import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Email atau password salah!');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login Admin</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleLogin} style={styles.form}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '400px',
    margin: 'auto'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1rem'
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem'
  },
  button: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#4F46E5',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    marginBottom: '1rem'
  }
};

export default Login;
