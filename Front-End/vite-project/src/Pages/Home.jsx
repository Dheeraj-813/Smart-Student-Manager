// import bgImg from '../assets/HomeBackGround.jpg';
import ProgressImg from "../assets/ProgressImage.jpg";
import studManage from "../assets/StudentManage.jpg";
import studentLogo from "../assets/studentLogo.png";
import graphLogo from "../assets/GraphLogo.jpg";
import Report from "../assets/Report.png";
import Visualize from "../assets/VisualizeData.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between gap-10 py-12 px-6 bg-gray-100"
        // style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="md:w-1/2 text-center md:text-left text-white">
          <h1 className="text-4xl font-semibold text-gray-800">
            Manage. Track. Succeed.
          </h1>

          <p className="mt-4 text-gray-600 max-w-md">
            Smartly manage students, track their performance, and build better
            futures.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img className="w-full max-w-md" src={ProgressImg} />
        </div>
      </section>

      <section
        id="management"
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
            All-in-one solution for student management, performance tracking,
            analytics.
          </p>

          <Link to="/LoginForm">
            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Feature section */}
      <section id="features" className="scroll-mt-20">
        <div className="text-center py-12 px-6 bg-gray-100">
          <h2 className="text-3xl font-semibold text-gray-800">
            Powerful Features to Manage Students Effectively
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-12">
          {/* Card 1 */}
          <div className="bg-white shadow rounded-xl p-5 transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <img
              src={studentLogo}
              alt="Student Logo"
              className="mx-auto mt-3 w-12 h-12"
            />
            <h2 className="text-blue-600 text-center text-lg font-bold">
              Manage Students
            </h2>
            <p className="text-base text-center font-semibold">
              Easily add, update, and delete student information{" "}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow rounded-xl p-5 transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <img
              src={graphLogo}
              alt="Graph Logo"
              className="mx-auto mt-3 w-12 h-12"
            />
            <h2 className="text-blue-600 text-center text-lg font-bold">
              Track Performance
            </h2>
            <p className="text-base text-center font-semibold">
              Monitor student marks and track their progress over time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow rounded-xl p-5 transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <img
              src={Report}
              alt="Report Logo"
              className="mx-auto mt-3 w-12 h-12"
            />
            <h2 className="text-blue-600 text-center text-lg font-bold">
              Generate Reports
            </h2>
            <p className="text-base text-center font-semibold">
              Create detailed reports on student performance and class
              analytics.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow rounded-xl p-5 transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <img
              src={Visualize}
              alt="Visualize Logo"
              className="mx-auto mt-3 w-12 h-12"
            />
            <h2 className="text-blue-600 text-center text-lg font-bold">
              Visualize Data
            </h2>
            <p className="text-base text-center font-semibold">
              Transform data into insightful visual representations.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howitworks" className="scroll-mt-20 text-center py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
        <p className="mt-4 text-gray-600 max-w-md mx-auto">
          Our platform simplifies student management with an intuitive
          interface, allowing educators to focus on what matters most: teaching
          and learning.
        </p>
        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* Step 1 */}
          <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-blue-500 text-2xl font-bold">01</div>

            <h3 className="text-xl font-semibold text-gray-800 mt-3">Login</h3>

            <p className="text-gray-600 mt-3">
              Securely access your student management dashboard.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-blue-500 text-2xl font-bold">02</div>

            <h3 className="text-xl font-semibold text-gray-800 mt-3">
              Manage Students
            </h3>

            <p className="text-gray-600 mt-3">
              Add, edit, view, and delete student records easily.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-blue-500 text-2xl font-bold">03</div>

            <h3 className="text-xl font-semibold text-gray-800 mt-3">
              Track Performance
            </h3>

            <p className="text-gray-600 mt-3">
              Monitor student marks and academic performance.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-blue-500 text-2xl font-bold">04</div>

            <h3 className="text-xl font-semibold text-gray-800 mt-3">
              Analyze Data
            </h3>

            <p className="text-gray-600 mt-3">
              View statistics, charts, top performers, and recent student
              activity.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="scroll-mt-20 text-center py-20 px-6 bg-gray-100"
      >
        <h2 className="text-3xl font-bold text-gray-800">
          About Student Manager System
        </h2>
        <p className="mt-4 text-gray-600 max-w-md mx-auto">
          Smart Student Manager is a full-stack web application designed to
          simplify student management, performance tracking, and data
          visualization through an intuitive and responsive interface.
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mt-8">
          Technology Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* React */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800">React.js</h3>
          </div>

          {/* Tailwind */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800">
              Tailwind CSS
            </h3>
          </div>

          {/* Node */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800">Node.js</h3>
          </div>

          {/* Express */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800">Express.js</h3>
          </div>

          {/* MongoDB */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800">MongoDB</h3>
          </div>

          {/* Axios */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800">Axios</h3>
          </div>

          {/* Chart.js */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800">Chart.js</h3>
          </div>

          {/* React Router */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800">
              React Router
            </h3>
          </div>

          {/* Font Awesome */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800">Font Awesome</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
