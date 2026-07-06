import NavBar from "../Components/NavBar";
import { Outlet } from 'react-router-dom'
import Footer from "../Components/Footer";

const PublicLayout = () => {
  return (
    <>
    <NavBar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default PublicLayout