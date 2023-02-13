import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';

import { API_BASE_URL } from 'api-config.js';

const ShowPage = () => {
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
            <title>User Detail</title>
            </Head>
            <div className="bg-white p-4 rounded-lg shadow-md">
                {loading ? (
                    <p className="text-gray-600 font-medium">Loading...</p>
                ) : (
                    <div>
                        <h1 className="text-2xl font-medium">{user.name}</h1>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                )}
            </div>
        </>
    );
    
};

export default ShowPage;
