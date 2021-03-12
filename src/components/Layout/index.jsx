import React from 'react';
import { LayoutContainer } from './styles';
import MainDashboard from '../MainDashboard';
import Map from '../Map';

const Layout = () => {
    return(
        <LayoutContainer>
            <Map />
            <MainDashboard />
        </LayoutContainer>
           
    );
};

export default Layout;