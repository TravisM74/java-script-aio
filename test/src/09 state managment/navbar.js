import {Link} from 'react-router-dom';
export const NavBar = () => {
    return (
        <div>
            navbar :
                <Link to='/'>Home</Link>
                <Link to='/Profile'>Profile</Link>
                <Link to='/contact'>Contact</Link>
        </div>
    )
}