import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from 'api-config.js';
import Head from 'next/head';
import Link from 'next/link';
import Axios from 'axios';

import UserList from '../../comps/UserList';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await Axios.get(`${API_BASE_URL}/api/users`);
                setUsers(res.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPost();
    }, []);

    return (
        <>
            <Head>
                <title>User List Page</title>
            </Head>
            <UserList users={users} loading={loading} setUsers={setUsers} />
            <Link href="/users/new">
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded">Create</button>
            </Link>
        </>
    );
};

export default Users;
