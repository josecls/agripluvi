import React from 'react';
import { LayoutContainer, Title } from './styles';
import MainDashboard from '../MainDashboard';
import Map from '../Map';

const Layout = () => {
    return (
        <>
            <LayoutContainer>
                <Title>Selecione uma região</Title>
                <Map />
                <MainDashboard />
            </LayoutContainer>
        </>
    );
};

export default Layout;