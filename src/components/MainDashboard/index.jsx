import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import DashboardInfo from '../DashboardInfo'
import { Container, Separator } from './styles'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    control: {
      padding: theme.spacing(2),
    },
  }))
  
const MainDashboard = () => {
    const classes = useStyles()

    return (
        <Container>
            <Grid className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <Separator />
                        <Grid item>
                            <DashboardInfo 
                                backgroundColor="yellow"
                                title="Cultura"
                                value="valor"
                                img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg"
                            /> 
                        </Grid>
                        <Separator />
                        <Grid item>
                            <DashboardInfo 
                                backgroundColor="yellow"
                                title="Temperatura"
                                value="valor"
                                img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg"
                            /> 
                        </Grid>
                        <Separator />
                        <Grid item>
                            <DashboardInfo 
                                backgroundColor="yellow"
                                title="Umidade"
                                value="valor"
                                img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg"
                            /> 
                        </Grid>
                        <Separator />
                        <Grid item>
                            <DashboardInfo 
                                backgroundColor="yellow"
                                title="Chuva"
                                value="valor"
                                img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg"
                            /> 
                        </Grid>
                        <Separator />
                    </Grid>
                </Grid>
            </Grid>
        </Container>

    );

}

export default MainDashboard;