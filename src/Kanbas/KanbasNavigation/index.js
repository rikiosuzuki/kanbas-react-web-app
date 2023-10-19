import { Link, useLocation } from "react-router-dom";
import {
    FaBook,
    FaCalendarAlt,
    FaClock,
    FaEnvelope,
    FaNetworkWired, FaQuestionCircle, FaSignOutAlt,
    FaTachometerAlt, FaTimesCircle,
    FaUser, FaUserAlt
} from "react-icons/fa";
import './styles.css';
function KanbasNavigation() {
    const links = [{
        name: "", icon: <img src={"../images/northeastern.jpg"} width={80}/>
    }, {
        name: "Account", icon: <FaUserAlt style={{color:"grey"}}/>
    }, {
        name:"Dashboard", icon: <FaTachometerAlt/>
    }, {
        name:"Courses", icon: <FaBook/>
    }, {
        name:"Calendar", icon: <FaCalendarAlt/>
    }, {
        name: "Inbox", icon: <FaEnvelope/>
    }, {
        name: "History", icon: <FaClock/>
    }, {
        name: "Studio", icon: <FaNetworkWired/>
    }, {
        name: "Commons", icon: <FaSignOutAlt/>
    }, {
        name: "Help", icon: <FaQuestionCircle/>
    }];
    const { pathname } = useLocation();
    return (
        <div className={"fixed-Navigation"}>
            <div className="list-group" style={{ width: 200, textDecoration:"none"}}>
                {links.map((link, index) => (
                    <Link style={{textDecoration: "none"}}
                        key={index}
                        to={`/Kanbas/${link.name}`}
                        className={`navbarStyle ${pathname.includes(link.name) && "active"}`}
                    >
                        <div style={{
                            textDecoration: "none",
                            backgroundColor: pathname.includes(link.name) ? 'white' : 'transparent',
                            color: pathname.includes(link.name) ? 'red' : 'white',
                            marginLeft: "10px", textAlign: "center"
                        }}>
                            <span className={'iconStyle'} style={{textAlign: "center"}}>
                                {link.icon}
                            </span>
                            <br/>
                            <span className={"linkStyle"}>
                            {link.name}
                        </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default KanbasNavigation;