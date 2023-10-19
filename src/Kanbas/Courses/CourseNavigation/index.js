import { Link, useParams, useLocation } from "react-router-dom";
import './styles.css';
import {FaBars} from "react-icons/fa";


function CourseNavigation() {
    const links = ["Home", "Modules","Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div>
            <div style={{ width: 1300 }}>
                {links.map((link, index) => (
                    <div className={"separateLinks"}>
                        <Link
                            key={index}
                            to={`/Kanbas/Courses/${courseId}/${link}`}
                            className={`list-group-item ${pathname.includes(link) && "active"}`}>
                        <span style={{color: pathname.includes(link) ? 'black': 'red',
                            borderLeft: pathname.includes(link) ? '3px solid black': 'transparent'}}>
                            {link}
                        </span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    );
}


export default CourseNavigation;