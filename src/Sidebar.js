import {Link} from "react-router-dom";

function Sidebar(props) {
    return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    </div>
    );
}

export default Sidebar;