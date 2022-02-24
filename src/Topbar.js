import { Link } from 'react-router-dom'

function Topbar() {
    return (
    <div>
        <Link to='/create-user'>
            <button>Create User</button>
        </Link>
    </div>
    );
}

export default Topbar;