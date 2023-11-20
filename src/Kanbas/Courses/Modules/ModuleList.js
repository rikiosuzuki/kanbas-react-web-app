import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import {addModule,deleteModule, updateModule, setModule, setModules} from "./modulesReducer";
import * as client from "./client";

import {useDispatch, useSelector} from "react-redux";
import {createModule, findModulesForCourse} from "./client";


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
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };








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
                        onClick={handleAddModule}>
                        Add</button>

                    <button style={{float: "right"}} className={"btn btn-primary"}
                            onClick={handleUpdateModule}>
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
                                        onClick={handleDeleteModule(module._id)}>
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