import AllRoutes from './AllRoutes.jsx'
import './App.css'
import Footer from "./components/footer/Footer.jsx"
import Navbar from './components/navbar/Navbar.jsx'

const App = () => {

  

  return (
    <>
      <Navbar />
      {/* <Navbar /> */}
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App
