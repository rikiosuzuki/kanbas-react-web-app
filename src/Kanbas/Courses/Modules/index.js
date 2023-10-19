import ModuleList from "./ModuleList";
import {FaEllipsis} from "react-icons/fa6";
import {FaEllipsisV} from "react-icons/fa";
function Modules() {
    return (
        <div>
            <h2>Modules</h2>
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
            <ModuleList/>
        </div>
    );
}
export default Modules;