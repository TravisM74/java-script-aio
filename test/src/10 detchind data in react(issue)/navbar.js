import {Link} from 'react-router-dom';
export const NavBar = () => {
    return (
        <div styles={{margin: 20}}> 
            navbar :
                <Link to='/'>Home</Link>:
                <Link to='/menu'>Profile</Link>:
                <Link to='/contact'>Contact</Link>
        </div>
    )
}