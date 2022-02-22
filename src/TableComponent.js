import {useState, useEffect} from 'react';

function TableComponent() {
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
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Credit Card</th>
                    <th>Title</th>
                    <th>Plan</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                <tr key={user.uid}>
                    <td>{user.avatar}</td>
                    <td>{user.first_name}</td>
                    <td>{user.email}</td>
                    <td>{user.date_of_birth}</td>
                    <td>{user.credit_card.cc_number}</td>
                    <td>{user.employment.title}</td>
                    <td>{user.subscription.plan}</td>
                    <td>{user.subscription.status}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default TableComponent;