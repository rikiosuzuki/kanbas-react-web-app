import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <h2>Assignment Name</h2>
            <input value={assignment.title}
                   className="form-control mb-2" />
            <textarea placeholder={"New Assignment Description"}>
            </textarea>
            <br/>
            <label>Points</label>
            <input placeholder={"100"}/>
            <br/>
            <label>Assign</label>
            <input/><br/>d
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-secondary">
                Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-danger me-2">
                Save
            </button>
            <hr/>
        </div>
    );
}


export default AssignmentEditor;