import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === data.email && user.password === data.password) {
      navigate('/dashboard'); // Replace history.push with navigate
    } else {
      setError('email', { type: 'manual', message: 'Invalid email or password' });
      setError('password', { type: 'manual', message: 'Invalid email or password' });
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="mt-3 text-center">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
