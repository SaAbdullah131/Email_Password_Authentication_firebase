import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='w-100 border'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;