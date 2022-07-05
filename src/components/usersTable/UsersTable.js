import React from 'react';
import Table from 'react-bootstrap/Table';

const UsersTable = ({users}) => (
    <div>
        {
            users.map((user, key) => {
                return (
                    
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th key={key}>#</th>
                                <th key={key}>Name </th>
                                <th key={key}>User Name</th>
                                <th key={key}>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td key={key}>{user.id}</td>
                                <td key={key}>{user.name}</td>
                                <td key={key}>{user.username}</td>
                                <td key={key}>{user.email}</td>
                            </tr>
                        </tbody>
                    </Table>
                )
            })
        }
    </div>
);

export default UsersTable;
