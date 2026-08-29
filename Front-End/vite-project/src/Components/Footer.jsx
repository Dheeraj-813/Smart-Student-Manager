const Footer = () => {

  return (
        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-5">
            <h2 className="text-2xl font-bold text-white">
              Smart Student Manager
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              Simplify student management, track performance,
              and make better academic decisions.
            </p>
            </div>

            <div className="p-5">
              <h2 className="text-2xl font-bold text-white">
                Useful Links
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#home" className="text-blue-500 hover:text-blue-600 hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-blue-500 hover:text-blue-600 hover:underline">
                    Features
                  </a>
                </li>
                <li> 
                  <a href="#howitworks" className="text-blue-500 hover:text-blue-600 hover:underline" > 
                    How It Works 
                  </a> 
                </li>
                <li>
                  <a href="#about" className="text-blue-500 hover:text-blue-600 hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="p-5">
              <h2 className="text-2xl font-bold text-white">
                Contact Us
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  Address : 123 Main Street, City, Country
                </li>
                <li>
                  Phone and Email : +1 (123) 456-7890, example@email.com
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-gray-600"> 
              &copy; {new Date().getFullYear()} Smart Student Manager. 
              All rights reserved.
            </p>
            <a href="#home" className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-500 transition-colors duration-300">
              <span className="sr-only">Back to top</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>
          </div>
        </footer>
  )
}

export default Footer