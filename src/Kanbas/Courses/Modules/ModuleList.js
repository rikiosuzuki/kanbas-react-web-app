import React, {useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {FaCheckCircle, FaGripVertical, FaPlus, FaSortDown} from "react-icons/fa";
import {FaEllipsisVertical} from "react-icons/fa6";
import {addModule, deleteModule, setModule, updateModule} from "./modulesReducer";
import {useDispatch, useSelector} from "react-redux";


function ModuleList() {
     const { courseId } = useParams();
    // const [modules, setModules] = useState(db.modules);
    // const [module, setModule] = useState({
    //     name: "New Module",
    //     description: "New Description",
    //     course: courseId,
    // });
    // const addModule = (module) => {
    //     setModules([
    //         { ...module, _id: new Date().getTime().toString() },
    //         ...modules,
    //     ]);
    // };
    // const deleteModule = (moduleId) => {
    //     setModules(modules.filter(
    //         (module) => module._id !== moduleId));
    // };
    //
    // const updateModule = () => {
    //     setModules(
    //         modules.map((m) => {
    //             if (m._id === module._id) {
    //                 return module;
    //             } else {
    //                 return m;
    //             }
    //         })
    //     );
    // }


    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();




    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <input value={module.name}
                           onChange={(e) =>
                               dispatch(setModule({ ...module, name: e.target.value }))}
                    />
                    <button
                        style={{float: "right"}}
                        className={"btn btn-success"}
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add</button>

                    <button style={{float: "right"}} className={"btn btn-primary"}
                            onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button><br/>
                    <textarea value={module.description}
                              onChange={(e) =>
                                  dispatch(setModule({ ...module, description: e.target.value }))
                    }/>
                </li>
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <div className={"row"}>
                                <div className={"col-9"}>
                                    <h3>{module.name}</h3>
                                    <p>{module.description}</p>
                                    <p>{module._id}</p>
                                </div>
                                <div className={"col-3"}>
                                    <button
                                        style={{float: "right"}}
                                        className={"btn btn-success"}
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>
                                    <button
                                        style={{float: "right"}}
                                        className={"btn btn-danger"}
                                        onClick={() => dispatch(deleteModule(module._id))}>
                                        Delete
                                    </button>
                                </div>

                            </div>
                        </li>))}

                {/*{*/}
                {/*    modules.filter((module) => courseId === module.course).map((module, index) => (*/}
                {/*        <div style={{marginBottom: "20px", marginTop: "10px"}}>*/}
                {/*            <li key={index} className="list-group-item" style={{backgroundColor: "lightgray"}}>*/}
                {/*                <FaGripVertical/>*/}
                {/*                <FaSortDown/>*/}
                {/*                <span style={{fontSize: "15px"}}><b>{module.name}</b></span>*/}
                {/*                <span style={{float: "right"}}>*/}
                {/*                    <span style={{color: "green"}}>*/}
                {/*                        <FaCheckCircle/>*/}
                {/*                    </span>*/}
                {/*                    <FaSortDown/>*/}
                {/*                    <FaPlus/>*/}
                {/*                    <FaEllipsisVertical/>*/}

                {/*                </span>*/}
                {/*            </li>*/}
                {/*        </div>*/}
                {/*    ))*/}
                {/*}*/}
            </ul>
        </div>
    );
}
export default ModuleList;