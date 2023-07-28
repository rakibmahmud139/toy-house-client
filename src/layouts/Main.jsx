import React from 'react';
import { Outlet } from 'react-router-dom';
import NabBar from '../share/navbar/NabBar';

const Main = () => {
    return (
        <div>
            <NabBar />
            <Outlet />
        </div>
    );
};

export default Main;