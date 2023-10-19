import { Link } from "react-router-dom";
import db from "../Database";
import './styles.css';
function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <hr/>
            <h2>Published Courses (3) </h2>
            <div className="d-flex flex-wrap">
                {courses.map((course) => (
                    <div className={"card putSpaceBetweenCards"}>
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                            <img src={"../images/blue.jpg"} width={"320"} height={"150"}/>
                            <div className={"card-body"}>
                                <span style={{color: "blue"}}>
                                    {course.number}
                                    &nbsp;
                                    {course.name} <br/>
                                </span>
                                <span>
                                    {course.number}
                                    .
                                    {course.courseIdNumber}
                                    .
                                    {course.CSNumber}<br/>
                                </span>
                                <span className={"makeTextSmaller"}>
                                    {course.CSNumber}
                                    _1 Fall 2023 Semester Full Term
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;