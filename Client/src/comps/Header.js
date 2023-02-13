import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="bg-gray-900 p-6 flex justify-between items-center">
            <p className="text-white font-medium">CRUD Application</p>
            <Navbar />
        </header>
    );
}
 
export default Header;