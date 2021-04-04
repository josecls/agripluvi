import styled from 'styled-components';
import select from '@material-ui/core/Select'
import menuItem from '@material-ui/core/MenuItem'

export const Select = styled(select)`
    margin-top: 30px;
    background: #fff !important;
    font-size: 15px !important;
`;

export const MenuItem = styled(menuItem)`
`;

export const LayoutContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 40px;
    color: #fff;
    margin-top: 100px;
    margin-bottom: 0px;
    text-align: center;
`;