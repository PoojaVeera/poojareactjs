import React from 'react'

//component
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar'


const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <div>
                <Sidebar />
            </div>
            <div>
                <Topbar />
                {children}
            </div>


        </div>
    )
}

export default Layout