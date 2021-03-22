import React from 'react';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import { animateScroll as scroll } from 'react-scroll'
import { Container } from './styles';

function ReturnButton() {
    const clickHandler = () => {
        scroll.scrollToTop()
    }
    return (
        <Container>
            <ArrowUpwardRoundedIcon fontSize="large" onClick={clickHandler} />
        </Container>
    );
}

export default ReturnButton;