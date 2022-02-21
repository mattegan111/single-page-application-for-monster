import {useState, useEffect} from 'react';

function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://random-data-api.com/api/users/random_user?size=10');
            const usersData = await response.json();
            setUsers(usersData);
        };
        fetchUsers();
    }, []);
    // The empty array [] means
    // this useEffect will run once

    return (
    <div>
        <h1>UsersPage</h1>
        <ul>
        {users.map(user => (
          <li >
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
    );
}

export default UsersPage;