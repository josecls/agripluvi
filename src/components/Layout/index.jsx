import React from 'react';
import { LayoutContainer } from './styles';
import MainDashboard from '../MainDashboard';
import Map from '../Map';

const Layout = () => {
    return(
        <LayoutContainer>
            <h1>agri.pluvi</h1>
            <Map />
            <MainDashboard />
        </LayoutContainer>
           
    );
};

export default Layout;