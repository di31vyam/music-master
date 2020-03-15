import React from 'react';
import {Link} from 'react-router-dom';
import Hcss from './Hcss';
const Header=() => {
    const style={
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    };

    return(
        <div className="van">
            <h3 style={style}><Link to='/'>Home</Link></h3>
            <div className="spacer"></div>
            <div className="item">
            <ul>
                <li><h3 style={style}><Link to='/signin'>LogIn</Link></h3></li>
                <li><h3 style={style}><Link to='/signup'>SignUp</Link></h3></li>
            </ul>
            </div>
        </div>
    )
}
export default Header;