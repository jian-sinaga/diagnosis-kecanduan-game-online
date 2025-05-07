import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const AdminDashboard = () => {
  const [pertanyaan, setPertanyaan] = useState([]);
  const [statistik, setStatistik] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const pertanyaanSnapshot = await db.collection('pertanyaan').get();
      setPertanyaan(pertanyaanSnapshot.docs.map(doc => doc.data()));

      const statistikSnapshot = await db.collection('statistik').get();
      setStatistik(statistikSnapshot.docs.map(doc => doc.data()));
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h2>Dashboard Admin</h2>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
      
      <h3>Pertanyaan Kuesioner</h3>
      <ul>
        {pertanyaan.map((item, index) => (
          <li key={index}>{item.pertanyaan}</li>
        ))}
      </ul>

      <h3>Statistik Pengguna</h3>
      <ul>
        {statistik.map((item, index) => (
          <li key={index}>Pengguna: {item.pengguna} | Skor Rata-Rata: {item.skor}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: 'auto'
  },
  button: {
    marginTop: '1rem',
    padding: '0.8rem 1.5rem',
    backgroundColor: '#4F46E5',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default AdminDashboard;
