import { Route, Routes } from "react-router"
// import Error from "./pages/error/Error"
// import Contact from "./pages/contact/Contact"
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

const AllRoutes = () => {
    return (
        <div className="main">
            <Routes>
                {/* <Route path="*" element={<Error />} /> */}
                <Route path="/" element={<Home />} />
                {/* <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/software-development" element={<Software />} />
                <Route path="/services/talent-acquisition" element={<TalentRadar />} />
                <Route path="/services/web-development" element={<Website />} />
                <Route path="/portfolio" element={<Portfolio  />} />
                <Route path="/portfolio/category/:category" element={<ProjectCategory />} />
                <Route path="/portfolio/:id" element={<Project />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/category/:category" element={<Category />} />
                <Route path="/blog/:id" element={<BlogPost />} /> */}
            </Routes>
        </div>
    )
}

export default AllRoutes