import pageNotFound from '../assets/PageNotFound.png'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${pageNotFound})` }}>
      {/* <h1 className="text-gray-500">Page Not Found</h1> */}
    </div>
  )
}

export default NotFound