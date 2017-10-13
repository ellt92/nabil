import { h } from 'preact';
import { media, Wrapper, Text, Bold } from 'styles';

import styled from 'styled-components';
import Header from 'components/header';
import Details from 'components/details';
import ScrollToTopOnMount from 'components/scroll-to-top-on-mount';
import InfoElement from 'components/info-element';

import MainImage from 'img/press-main.png';
import Mobile1 from 'img/press-mobile-1.png';
import Mobile2 from 'img/press-mobile-2.png';
import Mobile3 from 'img/press-mobile-3.png';
import Desktop1 from 'img/press-desktop-1.png';
import Desktop2 from 'img/press-desktop-2.png';
import Discovery1 from 'img/press-discovery-1.png';
import Discovery2 from 'img/press-discovery-2.png';

const ImageAndAnnotation = ({image, annotation, fullWidth}) => {
    let Img = styled.img`
        max-width: 320px;
        ${media.phone`
            max-width: 100%;
        `}
    `;
    const FullWidthImg = styled.img`
    `;
    return (
        <Wrapper flex column>
            {fullWidth && <FullWidthImg src={image}/>}
            {!fullWidth && <Img src={image}/>}
            <Wrapper center marginpx='-30px 0 0'>
                <Text fontsize={18} colour='gray'>{annotation}</Text>
            </Wrapper>
        </Wrapper>
    );
};

const DesktopImage = ({image}) => {
    let Img = styled.img`
        max-width: 480px;
        ${media.phone`
            max-width: 100%;
        `}
    `;
    return (
        <Wrapper flex column>
            {<Img src={image}/>}
        </Wrapper>
    );
};

const ImageTitle = ({image, title}) => (
    <Wrapper container center paddingpx='200px 0' positionrelative>
        <Text fontsize={144} title colour='gray'>{title}</Text>
        <Wrapper centerabsolute>
            <img src={image}/>
        </Wrapper>
    </Wrapper>
);

const PressAssociation = () => (
    <Wrapper>
        <ScrollToTopOnMount/>
        <Header/>
        <Wrapper bgc='white'>
            <Wrapper container overflowauto positionrelative>
                <Wrapper flex paddingpx='200px 0 0'>
                        <Text title colour='green' fontsize={84}>Press<br/>Association</Text>
                </Wrapper>
                <Wrapper maxwidth='425px' marginpx='30px 0 0' paddingpx='0 0 250px 0'>
                    <Text bold fontsize={18} colour='gray'>Objective</Text>
                    <br/>
                    <br/>
                    <Text light fontsize={24} colour='gray'>To create a service ( <a href='http://snappa.press.net/#!/feeds'><Text colour='green' bold fontsize={24}>SNAPPA</Text></a> ) aimed at attracting and engaging younger audiences who increasingly consume short snippets of content. presented in a visually led, shareable platform.</Text>
                </Wrapper>
                <Wrapper absolute top={140} right={-20}>
                    <img src={MainImage}/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='gray' overflowauto>
            <Wrapper container overflowauto>
                <InfoElement
                    leftText='Approaching the problem'
                    rightText={<span>The idea behind the <Bold>platform</Bold> was to create a site that can be <Bold>read</Bold> and <Bold>used on-the-go</Bold>. A mobile <Bold>first approach</Bold> was used, with simple <Bold>navigation</Bold> between story <Bold>tags</Bold> and <Bold>categories</Bold>.</span>}
                />
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='white'>
            <Wrapper container paddingpx='100px 0'>
                <Wrapper flex centerboth paddingpx='0 0 50px'>
                    <Text title colour='gray' fontsize={58}>Mobile</Text>
                </Wrapper>
                <Wrapper flex aligncenter>
                    <ImageAndAnnotation image={Mobile1} annotation=''/>
                    <ImageAndAnnotation image={Mobile2} annotation=''/>
                    <ImageAndAnnotation image={Mobile3} annotation=''/>
                </Wrapper>
            </Wrapper>
            <Wrapper container paddingpx='0 0 100px'>
                <Wrapper flex centerboth paddingpx='0 0 50px'>
                    <Text title colour='gray' fontsize={58}>Desktop</Text>
                </Wrapper>
                <Wrapper flex aligncenter justifyspacebetween>
                    <DesktopImage image={Desktop1}/>
                    <DesktopImage image={Desktop2}/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='gray' overflowauto>
            <Wrapper container overflowauto>
                <InfoElement
                    leftText='Visual Design'
                    rightText={<span>The <Bold>design</Bold> was split into two main segments - <Bold>B2B</Bold> / Beta and <Bold>B2C</Bold>. With the B2B designs, the <Bold>UI</Bold> was <Bold>secondary</Bold> in <Bold>highlighting</Bold> the content and imagery. With the B2C designs, there was an <Bold>opportunity</Bold> to make something <Bold>visually</Bold> more <Bold>compelling</Bold>.</span>}
                />
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='green' overflowauto center>
            <Wrapper container paddingpx='100px 0 0'>
                <Text title fontsize={144} colour='gray'>Design Discovery</Text>
            </Wrapper>
            <Wrapper container marginpx='-125px 0 50px' flex aligncenter justifyspacebetween>
                <Wrapper flex aligncenter justifyspacebetween>
                    <DesktopImage image={Discovery1}/>
                    <DesktopImage image={Discovery2}/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='lightgray' height={`${window.innerHeight}px`}>
            <Details/>
        </Wrapper>
    </Wrapper>
);

export default PressAssociation;
