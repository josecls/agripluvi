import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import DashboardInfo from '../DashboardInfo'
import ReturnButton from '../ReturnButton'
import { Container, Title, Subtitle, TextArea } from './styles'

import { assets, textNormalizer } from '../../services/helper';

import api from '../../services/api'

const MainDashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        cultura: 'undefined',
        temperatura: '0',
        umidade: '0',
        chuva: '0'
    });

    const getDashboardData = async () => {
        try {
            const { data } = await api.get('/estacao/recomendacao/A355');

            setDashboardData({
                cultura: textNormalizer(data.CULTURA),
                temperatura: data.TEMPERATURA,
                umidade: data.UMIDADE,
                chuva: data.CHUVA
            });

            return data;
        } catch (error) {
            throw error
        }
    }
    return (
        <Container>
            <TextArea>
                <Title onClick={getDashboardData}>Seus resultados</Title>
                <Subtitle>A região selecionada foi Avenida Brasil, 744, São Paulo - São Paulo</Subtitle>
            </TextArea>
            <Grid container justify="center" spacing={4}>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="#941C2F"
                        title="Cultura"
                        value={dashboardData.cultura}
                        img={assets[dashboardData.cultura]}
                    />
                </Grid>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="#FFD166"
                        title="Temperatura"
                        value={dashboardData.temperatura}
                        img={assets.temperatura}
                    />
                </Grid>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="#06D6A0"
                        title="Umidade"
                        value={dashboardData.umidade}
                        img={assets.umidade}
                    />
                </Grid>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="#B49FCC"
                        title="Chuva"
                        value={dashboardData.chuva}
                        img={assets.chuva}
                    />
                </Grid>
            </Grid>
            <ReturnButton />
        </Container>
    );

}

export default MainDashboard;