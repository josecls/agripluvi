import React from 'react';

import { Grid } from './styles';
import MainDashboard from '../MainDashboard';
import Map from '../Map';

const Layout = () => {
    return(
        <Grid>

            <Map />
            <MainDashboard />
            
        </Grid>
    );
};

export default Layout;