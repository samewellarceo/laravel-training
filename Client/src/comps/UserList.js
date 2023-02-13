import Link from 'next/link';
import axios from 'axios';

import React, { useState } from 'react';
import { API_BASE_URL } from 'api-config.js';

const UserList = ({ users, loading, setUsers }) => {
    const deleteUser = async userId => {
        var deleteConfirmed = confirm("Are you sure you want to delete this user?");

        if (deleteConfirmed) {
            await axios.delete(`${API_BASE_URL}/api/users/${userId}`);
            setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
        } 
    };

    return (
        <>
            <h1 className="text-2xl font-bold py-4 text-center">User List</h1>
            {loading ? (
                <p className="text-lg">Loading...</p>
            ) : (
                <table className="table-auto w-full text-left">
                <thead>
                    <tr className="bg-gray-800 text-white">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                    <tr key={user.id} className="bg-gray-100">
                        <td className="border px-4 py-2">{user.id}</td>
                        <td className="border px-4 py-2">{user.name}</td>
                        <td className="border px-4 py-2">{user.email}</td>
                        <td className="border px-4 py-2 text-center">
                        <Link href={`/users/show?id=${user.id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Show</button></Link>
                        <Link href={`/users/edit?id=${user.id}`}><button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button></Link>
                        <button onClick={() => deleteUser(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            )}
        </>
    );
};

export default UserList;
