import { Route, Routes } from "react-router"
// import Error from "./pages/error/Error"
import Home from "./pages/home/Home"
// import About from "./pages/about/About"
// import Services from "./pages/services/Services"
// import Software from "./pages/services/software/Software"
// import TalentRadar from "./pages/services/talent-radar/TalentRadar"
// import Portfolio from "./pages/portfolio/Portfolio"
// import Blog from "./pages/blog/Blog"
// import Category from "./pages/blog/sections/category/Category"
// import BlogPost from "./pages/blog/sections/BlogPost"
// import Project from "./pages/portfolio/sections/projects/Project"
// import ProjectCategory from "./pages/portfolio/sections/projects/ProjectCategory"
// import Website from "./pages/services/website/Website"
import "./App.css"
import Contact from "./pages/contact/Contact"
import Portfolio from "./pages/portfolio/Portfolio"
import ProjectCategory from "./pages/portfolio/sections/projects/ProjectCategory"
import Project from "./pages/portfolio/sections/projects/Project"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import About from "./pages/about/About"
import Service from "./pages/services/Service"
import StrategicTalentAcquisition from "./pages/talentAcquisition/StrategicTalentAcquisition"
import Recruitment from "./pages/talentAcquisition/Recruitment"
import StaffAugumentation from "./pages/talentAcquisition/StaffAugumentation"
import DigitalMarketing from "./pages/digitalMarketing/DigitalMarketing"
import Development from "./pages/development/Development"

const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="main">
                <Routes>
                    {/* <Route path="*" element={<Error />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/category/:category" element={<ProjectCategory />} />
                    <Route path="/portfolio/:id" element={<Project />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Service />} />
                    <Route path="/services/staffing-solutions" element={<StrategicTalentAcquisition />} />
                    <Route path="/services/talent-acquisition/recruitment" element={<Recruitment />} />
                    <Route path="/services/talent-acquisition/staff-augumentation" element={<StaffAugumentation />} />
                    <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                    <Route path="/services/development-services" element={<Development />} />
                    {/* 
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/category/:category" element={<Category />} />
                    <Route path="/blog/:id" element={<BlogPost />} /> */}
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default AllRoutes