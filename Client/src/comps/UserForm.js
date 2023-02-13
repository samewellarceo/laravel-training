import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { API_BASE_URL } from 'api-config.js';

const UserForm = ({ user = {}, onSubmit }) => {
    const [name, setName] = useState(user.name || '');
    const [email, setEmail] = useState(user.email || '');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let data = { name, email };

            if (password) {
                data = { ...data, password, password_confirmation: passwordConfirmation };
            }
            if (user.id) {
                await axios.put(`${API_BASE_URL}/api/users/${user.id}`, data)
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.error(error);
                });
            } else {
                await axios.post(`${API_BASE_URL}/api/users`, data);
            }
            router.push("/users");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
                <input
                className="border border-gray-400 p-2 w-full"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
                <input
                className="border border-gray-400 p-2 w-full"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password:</label>
                <input
                className="border border-gray-400 p-2 w-full"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="passwordConfirmation" className="block text-gray-700 font-medium mb-2">Confirm Password:</label>
                <input
                className="border border-gray-400 p-2 w-full"
                type="password"
                id="passwordConfirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">Save</button>
        </form>
    );
};

export default UserForm;
