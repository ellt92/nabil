import { h } from 'preact';
import { media, Wrapper, Text, Bold} from 'styles';

import styled from 'styled-components';
import Header from 'components/header';
import Details from 'components/details';
import ScrollToTopOnMount from 'components/scroll-to-top-on-mount';
import InfoElement from 'components/info-element';

import MainImage from 'img/values-main.png';
import GeometricDesignImage from 'img/values-geometric-design.png';
import PostersDesignImage from 'img/values-posters-design.png';

const ImageAndAnnotation = ({image, annotation, fullWidth}) => {
    const Img = styled.img`
        max-width: 320px;
    `;
    const FullWidthImg = styled.img`
    `;
    return (
        <Wrapper flex column>
            {fullWidth && <FullWidthImg src={image}/>}
            {!fullWidth && <Img src={image}/>}
            <Wrapper center marginpx='-30px 0 0'>
                <Text semibold fontsize={18} colour='gray'>{annotation}</Text>
            </Wrapper>
        </Wrapper>
    );
};
const GeoText = styled(Text)`
    ${media.phone`
        text-align: center;
        padding: 0 0 30px;
    `}
`;

const ImageTitle = ({image, title}) => (
    <Wrapper container center paddingpx='200px 0' positionrelative>
        <Text fontsize={144} title colour='gray'>{title}</Text>
        <Wrapper centerabsolute>
            <img src={image}/>
        </Wrapper>
    </Wrapper>
);

const TeamValues = () => (
    <Wrapper>
        <ScrollToTopOnMount/>
        <Header/>
        <Wrapper bgc='white'>
            <Wrapper container overflowauto positionrelative>
                <Wrapper flex centerboth paddingpx='200px 0 0'>
                        <Text title colour='green' fontsize={144}>Team Values</Text>
                </Wrapper>
                <Wrapper maxwidth='425px' marginpx='-50px 0 0' paddingpx='0 0 250px 0'>
                    <Text bold fontsize={18} colour='gray'>Objective</Text>
                    <br/>
                    <br/>
                    <Text light fontsize={24} colour='gray'>To create posters & aesthetics that represent the teams core values and help bring alignment.</Text>
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
                    rightText={<span>I wanted the <Bold>team</Bold> to <Bold>contribute</Bold> in creating the posters to make it a <Bold>collaborative</Bold> effort, my <Bold>goal</Bold> was to create a sense of <Bold>ownership</Bold> and <Bold>identity</Bold> for the team.</span>}
                />
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='lightgray'>
            <Wrapper container paddingpx='100px 0'>
                <Wrapper flex centerboth paddingpx='0 0 50px'>
                    <GeoText title colour='gray' fontsize={58}>Geometric Design</GeoText>
                </Wrapper>
                <Wrapper flex column aligncenter>
                    <ImageAndAnnotation fullWidth image={GeometricDesignImage} annotation=''/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='gray' overflowauto>
            <Wrapper container overflowauto>
                <InfoElement
                    leftText='Design'
                    rightText={<span>The <Bold>geometric</Bold> shapes were created to <Bold>represent</Bold> the <Bold>statements</Bold> for each poster. The statements were created as part of an off site workshop with team.</span>}
                />
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='green' overflowauto center>
            <Wrapper container paddingpx='100px 0 0'>
                <Text title fontsize={144} colour='gray'>Posters Design</Text>
            </Wrapper>
            <Wrapper marginpx='-94px 0 100px'><img src={PostersDesignImage}/></Wrapper>
        </Wrapper>
        <Wrapper bgc='lightgray' height={`${window.innerHeight}px`}>
            <Details/>
        </Wrapper>
    </Wrapper>
);

export default TeamValues;
