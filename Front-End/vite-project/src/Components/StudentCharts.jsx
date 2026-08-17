import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const StudentCharts = ({ students }) => {

const courseCounts = {};


if (!students || students.length === 0) {
    return <p className="text-center text-gray-500 py-10">
            No student data available.
        </p>;
}

students.forEach((student) => {
  if (courseCounts[student.course]) {
    courseCounts[student.course]++;
  } else {
    courseCounts[student.course] = 1;
  }
}); 

const barData = {
    labels: Object.keys(courseCounts),
    datasets: [
        {
            label: "Students",
            data: Object.values(courseCounts),
            backgroundColor: "#3B82F6",
            borderColor: "#2563EB",
            borderWidth: 1,
        },
    ],
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
  },
};

const marksRange = {
    "0-40": 0,
    "41-60": 0,
    "61-80": 0,
    "81-100": 0,
};

students.forEach((student) => {
    const marks = Number(student.marks);

    if (Number.isNaN(marks)) return;

    if (marks <= 40)
        marksRange["0-40"]++;
    else if (marks <= 60)
        marksRange["41-60"]++;
    else if (marks <= 80)
        marksRange["61-80"]++;
    else
        marksRange["81-100"]++;
});

const pieData = {
    labels: Object.keys(marksRange),
    datasets: [
        {
            data: Object.values(marksRange),
            backgroundColor: [
                "#EF4444",
                "#F59E0B",
                "#3B82F6",
                "#10B981",
            ],
        },
    ],
};

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

return (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

    {/* Bar Chart Card */}
    <div className="bg-white shadow rounded-xl p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Students by Course
      </h2>

      <div className="h-96">
        <Bar
          data={barData}
          options={barOptions}
        />
      </div>
    </div>

    {/* Pie Chart Card */}
    <div className="bg-white shadow rounded-xl p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Marks Distribution
      </h2>

      <div className="h-96">
        <Pie
          data={pieData}
          options={pieOptions}
        />
      </div>
    </div>

  </div>
);
};



export default StudentCharts;