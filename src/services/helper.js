import EU from '../assets/images/EU.jpg';
import mamao from '../assets/images/mamao.png';
import banana from '../assets/images/banana.png';
import goiaba from '../assets/images/goiaba.png';
import abacaxi from '../assets/images/abacaxi.png';
import acerola from '../assets/images/acerola.png';
import temperatura from '../assets/images/temperatura.svg';
import umidade from '../assets/images/umidade.svg';
import chuva from '../assets/images/chuva.svg';

export const assets = {
    undefined: EU,
    mamao,
    banana,
    goiaba,
    abacaxi,
    acerola,
    temperatura,
    umidade,
    chuva
}

export const textNormalizer = (text) => {
    let formattedText = text.toLowerCase();

    formattedText = formattedText.replace(/[ÀÁÂÃÄÅ]/g, 'A')
    formattedText = formattedText.replace(/[àáâãäå]/g, 'a')
    formattedText = formattedText.replace(/[ÈÉÊË]/g, 'E')
    formattedText = formattedText.replace(/[^a-z0-9]/gi, '')

    return formattedText.toLowerCase();
}