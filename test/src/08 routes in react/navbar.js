import {Link} from 'react-router-dom';
export const NavBar = () => {
    return (
        <div>
            navbar :
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/contact'>Contact</Link>
        </div>
    )
}