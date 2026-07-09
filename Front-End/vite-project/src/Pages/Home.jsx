// import bgImg from '../assets/HomeBackGround.jpg';
import ProgressImg from '../assets/ProgressImage.jpg';
import studManage from '../assets/StudentManage.jpg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
<section
  className="flex flex-col md:flex-row items-center justify-between gap-10 py-12 px-6 bg-gray-100"
  // style={{ backgroundImage: `url(${bgImg})` }}
>
  <div className="md:w-1/2 text-center md:text-left text-white">
    <h1 className="text-4xl font-semibold text-gray-800">
      Manage. Track. Succeed.
    </h1>

    <p className="mt-4 text-gray-600 max-w-md">
      Smartly manage students, track their performance, and build better futures.
    </p>
  </div>

  <div className="md:w-1/2 flex justify-center">
    <img className="w-full max-w-md" src={ProgressImg} />
  </div>
</section>

<section
  className="flex flex-col md:flex-row items-center justify-between gap-10 py-12 px-6 bg-gray-100"
>
  {/* LEFT → IMAGE */}
  <div className="md:w-1/2 flex justify-center">
    <img
      className="w-full max-w-md"
      src={studManage}
      alt="Student management illustration"
    />
  </div>

  {/* RIGHT → TEXT */}
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-3xl font-semibold text-gray-800">
      Empowering Education
    </h2>

    <h1 className="text-4xl font-bold text-blue-500 mt-2">
      Through Smart Management
    </h1>

    <p className="mt-4 text-gray-600 max-w-md">
      All-in-one solution for student management, performance tracking, analytics.
    </p>

<Link to="/LoginForm">
    <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
      Get Started
    </button>
</Link>
  </div>
</section>
    </>
  )
}

export default Home