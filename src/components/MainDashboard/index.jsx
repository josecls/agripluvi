import React from 'react'
import { Container, Separator } from './styles'
import DashboardInfo from '../DashboardInfo'


const MainDashboard = () => {

    return (
        <Container>
            <DashboardInfo
                backgroundColor='#FF0'
                title='algum titulo'
                value='algum valor'
                img='https://img.icons8.com/ios/452/banana.png'
            />
            {/* <BestCulture />
            <Umidity />
            <Temperature /> */}
        </Container>

    );

}

export default MainDashboard;