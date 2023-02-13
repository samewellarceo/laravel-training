import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='class="bg-gray-800 p-2 flex'>
            <Link className='text-white font-medium mr-4' href="/">Home</Link>
            <Link className='text-white font-medium mr-4' href="/about">About</Link>
            <Link className='text-white font-medium mr-4' href="/contact">Contact</Link>
            <Link className='text-white font-medium mr-4' href="/users">Users</Link>
        </nav>
    );
}
 
export default Navbar;