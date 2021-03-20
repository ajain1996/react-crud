import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import Navbar from '../layout/Navbar';

export default function Users() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };
    return (
        <>
            <div className="page-heading header-text">
                <Navbar />
            </div>
            <div className="container">
                <div className="py-4">
                    <div className="row my-3">
                        <div className="col-md-10">
                            <h4>Home Page</h4>
                        </div>
                        <Link className="btn btn-info col-md-2 text-white" to="/users/add">
                            Add User
                        </Link>
                    </div>
                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link
                                            class="btn btn-primary mr-2 btn-sm mx-1"
                                            to={`/users/${user.id}`}
                                        >
                                            View
                                        </Link>
                                        <Link
                                            class="btn btn-outline-primary mr-2 btn-sm mx-1"
                                            to={`/users/edit/${user.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            class="btn btn-danger btn-sm mx-1"
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Delete
                                    </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
