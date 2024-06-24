import { useEffect } from 'react'
import AllRoutes from './AllRoutes.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import ScrollContainer from './components/scroll-container/ScrollContainer.jsx';

const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  

  return (
    // <ScrollContainer>
      <AllRoutes />
    // </ScrollContainer>
  )
}

export default App
