import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Alumni from "./Pages/Alumni";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Notice from "./Pages/Notice";
import Program from "./Pages/Program";
import Routine from "./Pages/Routine";
import SingleBlog from "./Pages/SingleBlog";
import Teacher from "./Pages/Teacher";
import TeacherProfile from "./Pages/TeacherProfile";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/program" element={<Program />} />
                <Route path="/routine" element={<Routine />} />
                <Route path="/single-blog" element={<SingleBlog />} />
                <Route path="/teacher" element={<Teacher />} />
                <Route path="/teacher-profile" element={<TeacherProfile />} />
            </Routes>
        </>
    );
}

export default App;
