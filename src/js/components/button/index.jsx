import { h } from 'preact';
import { Link } from 'react-router-dom';
import { Text, getBGColour, getHoverHighlightColour } from 'styles';

import styled from 'styled-components';

var ButtonElement = styled.div`
    min-width: 200px;
    max-width: 300px;
    height: 50px;
    padding: 0 20px;
    ${getBGColour}
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span {
        font-size: 18px;
    }
    :hover {
        ${getHoverHighlightColour}
    }
`;

const getBGC = (colour) => {
    if (colour === 'green')
        return 'green';
    else if (colour === 'gray')
        return 'gray';
};

const getHHC = (colour) => {
    if (colour === 'green')
        return 'greenhighlight';
    else if (colour === 'gray')
        return 'grayhighlight';
};

const getTextColour = (colour) => {
    if (colour === 'green')
        return 'gray';
    else if (colour === 'gray')
        return 'white';
};

const Button = ({colour, href, children}) => {
    if (href) {
        return (
            <a href={href}>
                <ButtonElement hhc={getHHC(colour)} bgc={getBGC(colour)}>
                    <Text semibold colour={getTextColour(colour)}>{children}</Text>
                </ButtonElement>
            </a>
        );
    } else {
        return (
            <ButtonElement hhc={getHHC(colour)} bgc={getBGC(colour)}>
                <Text semibold colour={getTextColour(colour)}>{children}</Text>
            </ButtonElement>
        );
    }
};

export default Button;
