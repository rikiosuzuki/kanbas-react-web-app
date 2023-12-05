import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {Provider} from "react-redux";
import store from "./store";
import {useEffect, useState} from "react";
import db from "./Database";
import axios from "axios";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course",      number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([...courses, response.data]);
    };
    const deleteCourse = async (course) => {
        const response = await axios.delete(
            `${URL}/${course._id}`
        );

        setCourses(courses.filter(
            (c) => c._id !== course._id));    };

    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                }
                return c;
            })
        );
    };


    const URL = "http://localhost:4000/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);


    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation/>
                <div style={{marginLeft: "100px"}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>

                        } />
                        <Route path="Courses/:courseId/*" element={
                            <Courses courses={courses}/>} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/admin/users" element={<UserTable />} />
                        <Route path="/account/:id" element={<Account />} />




                    </Routes>

                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;