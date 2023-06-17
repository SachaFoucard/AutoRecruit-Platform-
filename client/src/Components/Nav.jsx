import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <>
            <div className='recruiters'>
                <ul>
                    <li><Link to="/">Career</Link></li>
                    <li><Link to="/HR/login">HR side</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Nav