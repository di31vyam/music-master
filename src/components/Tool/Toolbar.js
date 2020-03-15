import React from 'React';
import toolcss from './toolcss';
import {Link} from 'react-router-dom';
const toolbar=props=>(
    <header className="toolbar">
        <nav className="toolbar_navi">
        <div></div>
        <div className="toolbar_logo"><a href="/">Home</a></div>
        <div className="spacer"></div>
        <div className="toolbar_items">
            <ul>
                <li><a href="/">SingIn</a></li>
                <li><a href="/">SingUp</a></li>
            </ul>
        </div>
        </nav>
        
    </header>
);
export default toolbar;