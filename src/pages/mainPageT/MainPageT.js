import React, {useState, useEffect} from 'react';
import UsersTable from '../../components/usersTable/UsersTable';

function MainPageT(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // document.title = `you press ${count}`

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then (data => setUsers(data))
    },[])

    return (
        <div>
            <div>
                <h1>Main Page</h1>
            </div>
            
            <UsersTable users={users}/>

        </div>
    );
}

export default MainPageT;