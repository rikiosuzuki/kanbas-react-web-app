import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import db from "../../Database";
import {FaEllipsisVertical} from "react-icons/fa6";
import {FaBook, FaCheckCircle, FaGripVertical, FaPlus} from "react-icons/fa";
import './styles.css';

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    const navigate = useNavigate();
    const handleAddAssignment = () =>{
        navigate(`/Kanbas/Courses/${courseId}/AssignmentEditor`); // Use the correct path for your AssignmentEditor
    }
    return (
        <div>
            <input placeholder={"Search for Assignment"}/>
            <button className={"btn btn-secondary"} style={{float: "right"}}>
                <FaEllipsisVertical/>
            </button>
            <button className={"btn btn-danger"} style={{float: "right"}} onClick={handleAddAssignment}>
                + Assignment
            </button>
            <Link  to={`/Kanbas/Courses/${courseId}/Assignments`} className={"btn btn-secondary"}>
                + Assignment
            </Link>
            <button className={"btn btn-secondary"} style={{float: "right"}}>
                + Group
            </button>
            <hr/>
            <h5 className={"styleAssignmentsBackground"}>
                <span>
                    ASSIGNMENTS
                </span>
                    <span style={{float: "right"}}>
                    <FaEllipsisVertical/>
                </span>
                <span style={{float: "right", outline: "solid thin black", padding: "3px"}} className={"rounded-pill"}>
                    40% of Total
                </span>
                <span style={{float: "right"}}>
                    <FaPlus/>
                </span>
            </h5>
            <div style={{borderLeft: "5px solid green"}}>
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item">
                        <div className={"row"} style={{borderBottom: "1px solid grey", padding: "10px"}}>
                            <div className={"col-1"}>
                                <FaGripVertical/>
                                <span style={{color: "green", marginLeft: "10px"}}>
                                    <FaBook/>
                                </span>
                            </div>
                            <div className={"col-4"}>
                                <h5>
                                    {assignment.title}
                                </h5>
                                <span style={{color: "red"}}>
                                    Multiple Modules
                                </span>
                                <span>
                                    | Due Oct 1 at 11:59pm | 100 pts
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;