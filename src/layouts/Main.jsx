import React from 'react';
import { Outlet } from 'react-router-dom';
import NabBar from '../share/navbar/NabBar';
import Footer from '../share/footer/Footer';

const Main = () => {
    return (
        <div>
            <NabBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;