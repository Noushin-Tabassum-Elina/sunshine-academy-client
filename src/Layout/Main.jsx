import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/Shared/Navbar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;