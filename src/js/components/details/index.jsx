import { h } from 'preact';
import { Wrapper, FullHeight, Centered, Text } from 'styles';
import styled from 'styled-components';

const IconLink = ({href, icon, padding}) => (
    <a href={href} target='_blank'>
        <Text colour='green' paddingpx={padding} fontsize={30}>
            <i className={`fa fa-${icon}`}></i>
        </Text>
    </a>
);

const CopyText = ({colour, children}) => (
    <Text fontsize={36} colour={colour} center letterspacing={5}>{children}</Text>
);

const BottomText = styled(Wrapper)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 35px;
    letter-spacing: 5px;
`;

export default () => (
    <Wrapper positionrelative height='100%' bgc='lightgray' flex centerboth>
        <Wrapper container marginpx='80px 0 0' maxwidth='960px' flex centerboth column>
            <Text fontsize={144} colour='gray' title center letterspacing={0} >Details</Text>
            <Wrapper marginpx='30px 0 90px 0' center>
                <Text fontsize={36} center letterspacing={5} colour='gray' light>
                    If you would like to get in touch please feel free to drop me a <Text fontsize={36} center letterspacing={5} colour='green' bold><a href='mailto:nabilsharif@gmail.com'>line...</a></Text>
                </Text>
            </Wrapper>
            <Wrapper>
                <IconLink href='https://twitter.com/nabilsharif' icon='twitter'/>
                <IconLink href='https://www.linkedin.com/in/nabil-sharif-27010924/' icon='linkedin' padding='0 100px'/>
                <IconLink href='https://www.instagram.com/nabeezy/' icon='instagram'/>
            </Wrapper>
        </Wrapper>
        <BottomText flex centerboth>
            <Text light fontsize={18} marginpx='0 10px 0 0' letterspacing={5}>Designed with</Text><Text fontsize={36}>👾</Text>
        </BottomText>
    </Wrapper>
);
