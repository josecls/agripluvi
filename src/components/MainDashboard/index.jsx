import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { Container } from './styles'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 200,
      width: 200,
      background: '#1C5D99'
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
                        <Grid item>
                            <Paper className={classes.paper} /> 
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper} />
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper} />
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>

    );

}

export default MainDashboard;