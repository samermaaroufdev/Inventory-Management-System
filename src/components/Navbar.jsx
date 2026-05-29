import { Link } from 'react-router-dom';
import '../style/navbar.css'
const Navbar=()=>{
    return (
        <>
        <header className="header">
        <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/Products'>Products</Link>
            <Link to='/AddProduct'>Add Product</Link>
        </nav>
        </header>
        </>
    )
}

export default Navbar;