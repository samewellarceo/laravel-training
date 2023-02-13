import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from 'api-config.js';
import { useRouter } from 'next/router'
import Head from 'next/head';
import axios from 'axios';

import UserForm from '../../comps/UserForm';


const EditPage = () => {
    const router = useRouter();
    const userId = router.query.id;
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/api/users/${userId}`);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPost();
    }, [userId]);


    return (
        <>
            <Head>
                <title>Edit User Page</title>
            </Head>
            {loading ? (
                <p className="text-lg">Loading...</p>
            ) : (
                <div>
                    <h1 className="text-2xl font-bold py-3">Edit Page: </h1>
                    <UserForm user={user}/>
                </div>
            )}
        </>
    )
}

export default EditPage
