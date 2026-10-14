import { Outlet } from "react-router-dom"

function StudentReportLayout() {
  return (
    <>
    <div className="min-h-screen bg-blue-300 p-4">
      <main>
        <div className="mx-auto min-h-[1123px] w-full max-w-[794px] bg-white p-8 shadow-lg">
          <Outlet />
        </div>
      </main>
    </div>
    </>
  )
}

export default StudentReportLayout