import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {FaCheckCircle, FaGripVertical, FaPlus, FaSortDown} from "react-icons/fa";
import {FaEllipsisVertical} from "react-icons/fa6";


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div>
            <ul className="list-group">
                {
                    modules.filter((module) => courseId === module.course).map((module, index) => (
                        <div style={{marginBottom: "20px", marginTop: "10px"}}>
                            <li key={index} className="list-group-item" style={{backgroundColor: "lightgray"}}>
                                <FaGripVertical/>
                                <FaSortDown/>
                                <span style={{fontSize: "15px"}}><b>{module.name}</b></span>
                                <span style={{float: "right"}}>
                                    <span style={{color: "green"}}>
                                        <FaCheckCircle/>
                                    </span>
                                    <FaSortDown/>
                                    <FaPlus/>
                                    <FaEllipsisVertical/>

                                </span>
                            </li>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
}
export default ModuleList;