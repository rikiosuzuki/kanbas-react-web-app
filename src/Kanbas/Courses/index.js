import db from "../../Kanbas/Database";
import {useParams, Navigate, Route, Routes, useLocation} from "react-router-dom";
import {FaBars} from "react-icons/fa";

import './styles.css';
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";


function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const routeName = window.location.pathname.split('/');
    const locate = routeName[routeName.length-2];
    const location = useLocation();
    return (
        <div>
            <div>
                <span style={{color: "red", fontSize:"30px"}}>
                    <FaBars/>
                </span>
                <span className={"styleCourses"}>
                        &nbsp;
                    01 FA23
                    </span>
                <span>
                    &nbsp;
                    >
                    &nbsp;
                    {getLocationName(location.pathname)}
                </span>
                <hr/>
            </div>
            <div className={"row"}>
                <div className={"col-2"}>
                    <CourseNavigation />
                </div>
                <div className={"col-9"}>
                    <div
                        style={{
                            left: "320px",
                            top: "50px",}}>
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home/>} />
                            <Route path="Modules" element={
                                <div>
                                    <Modules/>
                                </div>
                            } />
                            <Route path="Assignments" element={<Assignments/>} />
                            <Route
                                path="Assignments/:assignmentId"
                                element={<AssignmentEditor/>}
                            />
                            <Route path="Grades" element={<h1>Grades</h1>} />
                        </Routes>
                    </div>
                </div>

            </div>
        </div>
    );
}
function getLocationName(pathname) {
    if(pathname.includes('/Home')){
        return 'Home';
    } else if(pathname.includes('/Modules')){
        return 'Modules';
    } else if(pathname.includes('/Assignments/')){
        return 'Assignments > A1 - ENV';
    } else if(pathname.includes('/Assignments')){
        return 'Assignments';
    } else if(pathname.includes('/Grades')){
        return 'Grades';
    }
}
export default Courses;