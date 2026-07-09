
import studentsCap from '../assets/students-cap.png';
import studManage from '../assets/StudentManage.jpg'

function LoginForm() {
  return (
    <>
    <div className='min-h-screen flex flex-col md:flex-row'>
        {/* Left side - Logo + image */}
        <div className="md:w-1/2 flex flex-col items-center justify-center">
                    {/* Logo */}
            <div className="flex items-center space-x-3 mt-6 mb-6">
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
            <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Welcome Back

                    Sign in to continue to Smart Student Manager</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Enter your email"
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
                        placeholder="Password"
                    />
                </div>

                <div className='mb-4'>
                    <label className="inline-flex items-center">
                        <a href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700 underline">
                            Forgot Password?
                        </a>
                    </label>
                </div>

                <div className='mb-4'>
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            className="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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