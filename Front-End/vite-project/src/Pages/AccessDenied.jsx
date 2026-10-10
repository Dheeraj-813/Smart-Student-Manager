import AccessDeniedImg from '../Assets/AccessDenied.png';

const AccessDenied = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <img src={AccessDeniedImg} alt="Access Denied" className="w-1/3 mb-4" />
    </div>
  )
}

export default AccessDenied