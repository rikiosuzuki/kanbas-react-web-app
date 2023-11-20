import { Link } from "react-router-dom";
import db from "../Database";
import './styles.css';
import {useState} from "react";
function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
) {

    return (
        <div>
            <h1>Dashboard</h1>
            <hr/>

            <h2>Published Courses (3) </h2>
            <hr/>
            <div className={"row"}>
                <div className={"col-4"}>

                </div>
                <div className={"col-5"}>
                    <button className={"btn btn-danger"} onClick={addNewCourse}>
                        Add
                    </button>
                    <button className={"btn btn-primary"} onClick={updateCourse}>
                        Update
                    </button>
                    <input value={course.name} className="form-control"
                           onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                    <input value={course.number} className="form-control"
                           onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                    <input value={course.startDate} className="form-control" type="date"
                           onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                    <input value={course.endDate} className="form-control" type="date"
                           onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

                </div>


            </div>
            <div className="list-group">
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        {course.name}
                        <div style={{float: "right"}}>
                            <button className={"btn btn-warning"}
                                    onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                            }}>
                                Edit
                            </button>
                            <button className={"btn btn-danger"}  onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course);
                            }}>
                                Delete
                            </button>
                        </div>
                    </Link>
                ))}
            </div>




            {/*<div className="d-flex flex-wrap">*/}
            {/*    {courses.map((course) => (*/}
            {/*        <div className={"card putSpaceBetweenCards"}>*/}
            {/*            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">*/}
            {/*                <img src={"../images/blue.jpg"} width={"320"} height={"150"}/>*/}
            {/*                <div className={"card-body"}>*/}
            {/*                    <span style={{color: "blue"}}>*/}
            {/*                        {course.number}*/}
            {/*                        &nbsp;*/}
            {/*                        {course.name} <br/>*/}
            {/*                    </span>*/}
            {/*                    <span>*/}
            {/*                        {course.number}*/}
            {/*                        .*/}
            {/*                        {course.courseIdNumber}*/}
            {/*                        .*/}
            {/*                        {course.CSNumber}<br/>*/}
            {/*                    </span>*/}
            {/*                    <span className={"makeTextSmaller"}>*/}
            {/*                        {course.CSNumber}*/}
            {/*                        _1 Fall 2023 Semester Full Term*/}
            {/*                    </span>*/}
            {/*                </div>*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
}
export default Dashboard;