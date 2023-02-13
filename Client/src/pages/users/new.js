import UserForm from '../../comps/UserForm';
import Head from 'next/head';

const CreateUser = () => {
    return (
        <>
            <Head>
                <title>Create User Page</title>
            </Head>
            <h1 className="text-2xl font-bold py-4">Create User Page</h1>
            <UserForm />
        </>
    );

}
 
export default CreateUser;