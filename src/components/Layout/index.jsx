import React, { useState } from 'react';
import { LayoutContainer, Title, Select, MenuItem } from './styles';
import MainDashboard from '../MainDashboard';
import Map from '../Map';
import api from '../../services/api'

import { animateScroll as scroll } from 'react-scroll'

const Layout = () => {
    const [selectedItem, setSelectedItem] = useState('0');
    const [dashboardData, setDashboardData] = useState({
        cultura: 'Não definido',
        temperatura: '0',
        umidade: '0',
        chuva: '0'
    });

    const regions = {
        '0': 'Selecione uma região',
        '82989': 'Água branca (Convencional)',
        '82992': 'Palmeira dos índios (Convencional)',
        '82994': 'Maceió (Convencional)',
        '82996': 'Porto de pedras (Convencional)',
        'A353': 'Arapiraca (Automática)',
        'A355': 'Coruripe (Automática)',
        'A303': 'Maceió (Automática)',
        'A327': 'Palmeira dos índios (Automática)',
        'A323': 'Pão de açúcar (Automática)',
        'A371': 'Piranhas (Automática)',
        'A356': 'São luis do quitunde (Automática)',
    }

    const getDashboardData = async (code) => {
        try {
            const { data, status } = await api.get(`/estacao/recomendacao/${code}`);

            if (status === 200) {
                setDashboardData({
                    cultura: data.CULTURA,
                    temperatura: data.TEMPERATURA,
                    umidade: data.UMIDADE,
                    chuva: data.CHUVA
                });

                scroll.scrollTo(1200);
            }


            return data;
        } catch (error) {
            throw error
        }
    }

    const selectHandler = (e) => {
        const value = e.target.value;

        setSelectedItem(value);
        getDashboardData(value);

        return true;
    }

    return (
        <>
            <LayoutContainer>
                <Title od>Selecione uma região</Title>
                <Select value={selectedItem} title={selectedItem} onChange={(e) => selectHandler(e)} variant="outlined" >
                    {
                        Object.entries(regions).map((region) => (<MenuItem value={region[0]}>{region[1]}</MenuItem>))
                    }
                </Select>
                <Map />
                <MainDashboard dashboardData={dashboardData} region={regions[selectedItem]} />
            </LayoutContainer>
        </>
    );
};

export default Layout;