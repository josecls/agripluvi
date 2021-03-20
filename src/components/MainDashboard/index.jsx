import React from 'react'
import Grid from '@material-ui/core/Grid'
import DashboardInfo from '../DashboardInfo'
import ReturnButton from '../ReturnButton'
import { Container, Title, Subtitle, TextArea } from './styles'

import cultura from '../../assets/images/banana.png'
import temperatura from '../../assets/images/temperatura.svg'
import umidade from '../../assets/images/umidade.svg'
import chuva from '../../assets/images/chuva.svg'

const MainDashboard = () => {
    return (
        <Container>
            <TextArea>
                <Title>Seus resultados</Title>
                <Subtitle>A região selecionada foi Avenida Brasil, 744, São Paulo - São Paulo</Subtitle>
            </TextArea>
            <Grid container justify="center" spacing={4}>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="#941C2F"
                        title="Cultura"
                        value="Banana"
                        img={cultura}
                    />
                </Grid>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="#FFD166"
                        title="Temperatura"
                        value="0"
                        img={temperatura}
                    />
                </Grid>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="#06D6A0"
                        title="Umidade"
                        value="0"
                        img={umidade}
                    />
                </Grid>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="#B49FCC"
                        title="Chuva"
                        value="0"
                        img={chuva}
                    />
                </Grid>
            </Grid>
            <ReturnButton />
        </Container>
    );

}

export default MainDashboard;