import { h } from 'preact';
import { media, Wrapper, Text } from 'styles';
import styled from 'styled-components';

const LeftText = styled(Wrapper)`
    min-width: 250px;
    max-width: 250px;
    margin: 0 200px 0 0;
    ${media.phone`
        min-width: inherit;
        max-width: inherit;
        margin: 0 0 20px 0;
        width: 100%;
    `}
`;

const InfoElement = ({leftText, rightText}) => (
    <Wrapper marginpx='150px 0 150px 0' flex>
        <LeftText>
            <Text bold fontsize={18} colour='white'>{leftText}</Text>
        </LeftText>
        <Wrapper maxwidth='550px'>
            <Text light fontsize={24} colour='white'>{rightText}</Text>
        </Wrapper>
    </Wrapper>
);

export default InfoElement;
