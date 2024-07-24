"use client"
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError('')
      try {
        const response = await axios.post('http://localhost:3000/auth/signIn', {
          email: email,
          password: password,
        });
        const { token } = response.data;
        localStorage.setItem('token', token);
        router.push('/dashboard');
      } catch (err) {
        setError('Invalid ');
      }
    };
  

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-center text-gray-600">Welcome Back</h1>
            <div className="flex justify-center">
              <div className="bg-gray-300 text-gray-700 rounded-full w-16 h-16 flex items-center justify-center text-4xl">A</div>
            </div>
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute  text-gray-600 inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                  &#128065;
                </span>
              </div>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white py-2 rounded-lg hover:from-purple-500 hover:to-blue-400 transition-colors duration-300"
            >
              LOGIN
            </button>
            <p className="text-center text-gray-600">
              Don't have an account? <a href="/signUp" className="text-blue-500 hover:underline">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
