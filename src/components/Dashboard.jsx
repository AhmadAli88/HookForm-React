import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/login'); // Replace history.push with navigate
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login'); // Replace history.push with navigate
  };

  if (!user) return null;

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Welcome to Dashboard</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
