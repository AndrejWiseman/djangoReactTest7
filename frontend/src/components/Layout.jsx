import React from 'react';
import Navigacija from './Navbar'

const Layout =({children}) =>{
    return(
        <>
        <Navigacija />
        <main>{children}</main>
        </>
    )
}

export default Layout;