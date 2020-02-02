import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <div>
                        <Link to={'/'}></Link>
                    </div>                    
                </li>
                <li>
                    <div>
                        <Link to={'/create'}></Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar