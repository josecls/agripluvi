import React from 'react'
import Grid from '@material-ui/core/Grid'
import DashboardInfo from '../DashboardInfo'
import { Container } from './styles'

const MainDashboard = () => {
    return (
        <Container>
            <Grid container justify="center" spacing={4}>

                <Grid item>
                    <DashboardInfo
                        backgroundColor="yellow"
                        title="Cultura"
                        value="valor"
                        img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg"
                    />
                </Grid>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="yellow"
                        title="Temperatura"
                        value="valor"
                        img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg"
                    />
                </Grid>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="yellow"
                        title="Umidade"
                        value="valor"
                        img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg"
                    />
                </Grid>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="yellow"
                        title="Chuva"
                        value="valor"
                        img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg"
                    />
                </Grid>
            </Grid>
        </Container>

    );

}

export default MainDashboard;