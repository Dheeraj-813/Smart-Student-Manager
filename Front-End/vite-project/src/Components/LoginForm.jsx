
import studentsCap from '../assets/students-cap.png';
import studManage from '../assets/StudentManage.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'rememberMe') {
      setRememberMe(e.target.checked);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Reset form after submit
    setEmail('');
    setPassword('');
    setRememberMe(false);
  }

  return (
    <>
    <div className='min-h-screen flex flex-col md:flex-row'>
        {/* Left side - Logo + image */}
        <div className="md:w-1/2 flex flex-col items-center justify-center">
                    {/* Logo */}
            <div className="flex items-center space-x-3 mt-8 mb-6">
                <img className="w-[45px] h-[45px]" src={studentsCap} alt="logo" />
                <span className="text-xl font-bold text-gray-800">Smart Student Manager</span>
            </div>

                <img
                  className="w-full max-w-md"
                  src={studManage}
                  alt="Student management illustration"
                />
        </div>

        {/* Right side - Login form */}
        <div className="md:w-1/2 flex items-center justify-center">
            <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-6">Welcome Back<br /></h1>

                    <h2 className='font-semibold text-gray-500 mb-4'>Sign in to continue to Smart Student Manager</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name='email'
                        placeholder="Enter your email"
                        onChange={handleChange}
                        value={email}
                        autoComplete='email'
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name='password'
                        placeholder="Password"
                        onChange={handleChange}
                        value={password}
                        autoComplete='current-password'
                    />
                </div>

                <div className='flex justify-between items-center mt-4'>
                        <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700">
                            Forgot Password?
                        </Link>

                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                            name='rememberMe'
                            checked={rememberMe}
                            onChange={handleChange}
                        />
                        <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="items-center justify-between mt-6">
                    <button
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default LoginForm