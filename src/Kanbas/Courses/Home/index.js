import ModuleList from "../Modules/ModuleList";
import {FaEllipsisV} from "react-icons/fa";
import {FaCircleCheck} from "react-icons/fa6";

function Home() {
    return (
        <div className={"row"}>
            <div className={"col-8"}>
                <h2>Home</h2>
                <button className={"btn btn-secondary"}>
                    Collapse All
                </button>
                <button className={"btn btn-secondary"}>
                    View Progress
                </button>
                <button className={"btn btn-secondary"}>
                    Publish All
                </button>
                <button className={"btn btn-danger"}>
                    + Module
                </button>
                <button className={"btn btn-secondary"}>
                    <FaEllipsisV/>
                </button>
                <br/>
                <hr/>
                <ModuleList />
                <h2>Status</h2>
            </div>
            <div className={"col-3"}>
                <button className={"btn btn-secondary"}>Import Existing Content</button>
                <button className={"btn btn-secondary"}> Import from Commons</button>
                <button className={"btn btn-secondary"}> Choose Home Page</button>
                <button className={"btn btn-secondary"}> View Course Stream</button>
                <button className={"btn btn-secondary"}> New Announcement</button>
                <button className={"btn btn-secondary"}> New Analytics</button>
                <button className={"btn btn-secondary"}> View Course Notifications</button>
                <h5>To do</h5>
                <hr/>
                <div className={"row"}>
                    <div className={"col-1"}>
                        <FaCircleCheck/>
                    </div>
                    <div className={"col-10"}>
                        <span style={{color: "red"}}>
                            Grade A1 - ENV + HTML
                        </span>
                        <p style={{fontSize: "10px"}}>
                            100 points * Sep 18 at 11:59pm
                        </p>
                    </div>

                </div>


            </div>
        </div>
    );
}
export default Home;