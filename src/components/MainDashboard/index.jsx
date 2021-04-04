import React from 'react'
import Grid from '@material-ui/core/Grid'
import DashboardInfo from '../DashboardInfo'
import ReturnButton from '../ReturnButton'
import { Container, Title, Subtitle, TextArea } from './styles'

import { assets, textNormalizer } from '../../services/helper';

const MainDashboard = (props) => {
    return (
        <Container>
            <TextArea>
                <Title id="results">Seus resultados</Title>
                {props.region && props.region !== 'Selecione uma região'
                    ? (<Subtitle>A região selecionada foi {props.region}</Subtitle>)
                    : React.Fragment
                }
                {!props.region || props.region === 'Selecione uma região'
                    ? (<Subtitle>Defina uma região para obter resultados.</Subtitle>)
                    : React.Fragment
                }
            </TextArea>
            <Grid container justify="center" spacing={4}>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="#941C2F"
                        title="Cultura"
                        value={props.dashboardData.cultura}
                        img={assets[textNormalizer(props.dashboardData.cultura)] || assets['Não definido']}
                        alt={`Ícone vetorizado de uma ${props.dashboardData.cultura}`}
                    />
                </Grid>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="#FFD166"
                        title="Temperatura"
                        value={props.dashboardData.temperatura + " °C"}
                        img={assets.temperatura}
                        alt={`Ícone vetorizado de um termômetro`}
                    />
                </Grid>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="#06D6A0"
                        title="Umidade"
                        value={props.dashboardData.umidade + " g/Kg"}
                        img={assets.umidade}
                        alt="Ícone vetorizado de medidor de umidade"
                    />
                </Grid>
                <Grid item>
                    <DashboardInfo
                        backgroundColor="#B49FCC"
                        title="Chuva"
                        value={props.dashboardData.chuva + " mm"}
                        img={assets.chuva}
                        alt="Ícone vetorizado de nuvem de chuva"
                    />
                </Grid>
            </Grid>
            <ReturnButton />
        </Container>
    );

}

export default MainDashboard;