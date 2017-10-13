import { h } from 'preact';
import { Wrapper, Text, Bold } from 'styles';

import styled from 'styled-components';
import Header from 'components/header';
import Details from 'components/details';
import ScrollToTopOnMount from 'components/scroll-to-top-on-mount';
import InfoElement from 'components/info-element';

import MainImage from 'img/toolbars-mainimage.png';
import CurrentToolbar1 from 'img/toolbars-currenttoolbars-1.png';
import CurrentToolbar2 from 'img/toolbars-currenttoolbars-2.png';
import Wireframes1 from 'img/toolbars-wireframes-1.png';
import Wireframes2 from 'img/toolbars-wireframes-2.png';
import Wireframes3 from 'img/toolbars-wireframes-3.png';
import DesignDiscovery1 from 'img/toolbars-design-discovery-1.png';
import DesignDiscovery2 from 'img/toolbars-design-discovery-2.png';
import DesignDiscovery3 from 'img/toolbars-design-discovery-3.png';
import DesignDiscovery4 from 'img/toolbars-design-discovery-4.png';
import DesignDiscovery5 from 'img/toolbars-design-discovery-5.png';
import DesignDiscovery6 from 'img/toolbars-design-discovery-6.png';
import States1 from 'img/toolbars-states-1.png';
import States2 from 'img/toolbars-states-2.png';
import States3 from 'img/toolbars-states-3.png';
import Prototype from 'img/toolbars-prototype.png';
import Prototype2 from 'img/toolbars-prototype2.png';
import PrototypeVideo from 'vid/toolbars-prototype.mov';

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

const ImageTitle = ({image, title}) => (
    <Wrapper container center paddingpx='200px 0' positionrelative>
        <Text fontsize={144} title colour='gray'>{title}</Text>
        <Wrapper centerabsolute>
            <img src={image}/>
        </Wrapper>
    </Wrapper>
);

const ProjectToolbars = () => (
    <Wrapper>
        <ScrollToTopOnMount/>
        <Header/>
        <Wrapper bgc='white'>
            <Wrapper container overflowauto positionrelative>
                <Wrapper flex centerboth paddingpx='200px 0 0'>
                        <Text title colour='green' fontsize={144}>Pixel Toolbars</Text>
                </Wrapper>
                <Wrapper maxwidth='425px' marginpx='-50px 0 0' paddingpx='0 0 250px 0'>
                    <Text bold fontsize={18} colour='gray'>Objective</Text>
                    <br/>
                    <br/>
                    <Text light fontsize={24} colour='gray'>To update the current editing process of the images and text using the toolbar. This is also in preparation to provide new functionality further down the line.</Text>
                </Wrapper>
                <Wrapper absolute top={230} right={-92}>
                    <img src={MainImage}/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='gray' overflowauto>
            <Wrapper container overflowauto>
                <InfoElement
                    leftText='Approaching the problem'
                    rightText={<span>After <Bold>consulting</Bold> with the <Bold>CS teams</Bold> and watching various <Bold>UT videos</Bold> of people struggling to use <Bold>Pixel</Bold> - it was <Bold>obvious</Bold> that in order for us the improve the <Bold>overall experience</Bold>, the <Bold>toolbars</Bold> needed to be <Bold>updated</Bold>.</span>}
                />
                <InfoElement
                    leftText='Analysing competitors'
                    rightText={<span>We <Bold>looked</Bold> at <Bold>competitors</Bold> as a <Bold>quick way</Bold> to <Bold>analyse</Bold> and <Bold>test potential functionality</Bold> that could be implemented into the new toolbar <Bold>without</Bold> having the <Bold>need</Bold> to create a <Bold>prototype</Bold>. Our main aim was to stick to <Bold>convention</Bold> for quick start.</span>}
                />
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='white'>
            <Wrapper container paddingpx='100px 0'>
                <Wrapper flex centerboth paddingpx='0 0 50px'>
                    <Text title colour='gray' fontsize={58}>Current Toolbars</Text>
                </Wrapper>
                <Wrapper flex column aligncenter>
                    <ImageAndAnnotation fullWidth image={CurrentToolbar1} annotation='Text format toolbar'/>
                    <ImageAndAnnotation fullWidth image={CurrentToolbar2} annotation='Image format toolbar'/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='gray' overflowauto>
            <Wrapper container overflowauto>
                <InfoElement
                    leftText='Wireframing'
                    rightText={<span>Worked together with the UX designer on the team to come up with <Bold>rough wireframes</Bold> of potential <Bold>toolbar layouts</Bold>. Along with our <Bold>PO</Bold> we worked out the <Bold>pros</Bold> and <Bold>cons</Bold> for various <Bold>options</Bold>.</span>}
                />
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='lightgray'>
            <Wrapper container paddingpx='100px 0'>
                <Wrapper flex centerboth paddingpx='0 0 50px'>
                    <Text title colour='gray' fontsize={58}>Wireframes</Text>
                </Wrapper>
                <Wrapper flex column aligncenter>
                    <ImageAndAnnotation fullWidth image={Wireframes1} annotation='Image format wireframe'/>
                    <ImageAndAnnotation fullWidth image={Wireframes2} annotation='Text format wireframe'/>
                    <ImageAndAnnotation fullWidth image={Wireframes3} annotation='Wireframe in context'/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='gray' overflowauto>
            <Wrapper container overflowauto>
                <InfoElement
                    leftText='Visual Design'
                    rightText={<span>Using the <Bold>wireframes</Bold> as a good reference point - I designed the <Bold>visual elements</Bold> for the <Bold>toolbar</Bold>. The design <Bold>evolved</Bold> over time and was <Bold>iterated</Bold> on after <Bold>UT feedback</Bold>. The toolbar also incorporated <Bold>MOO’s design language</Bold> and had to be <Bold>scalable</Bold> for <Bold>future products</Bold>.</span>}
                />
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='lightgray'>
            <Wrapper container paddingpx='100px 0'>
                <Wrapper flex centerboth paddingpx='0 0 50px'>
                    <Text title colour='gray' fontsize={58}>Design Discovery</Text>
                </Wrapper>
                <Wrapper flex column aligncenter>
                    <ImageAndAnnotation fullWidth image={DesignDiscovery1} annotation=''/>
                    <ImageAndAnnotation fullWidth image={DesignDiscovery2} annotation=''/>
                    <ImageAndAnnotation fullWidth image={DesignDiscovery3} annotation=''/>
                    <ImageAndAnnotation fullWidth image={DesignDiscovery4} annotation=''/>
                    <ImageAndAnnotation fullWidth image={DesignDiscovery5} annotation=''/>
                    <ImageAndAnnotation fullWidth image={DesignDiscovery6} annotation=''/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='white'>
            <Wrapper container paddingpx='100px 0'>
                <Wrapper flex centerboth paddingpx='0 0 50px'>
                    <Text title colour='gray' fontsize={58}>Toolbar States</Text>
                </Wrapper>
                <Wrapper flex column aligncenter>
                    <ImageAndAnnotation fullWidth image={States1} annotation='Default state'/>
                    <ImageAndAnnotation fullWidth image={States2} annotation='Hover state'/>
                    <ImageAndAnnotation fullWidth image={States3} annotation='Active state'/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='green' overflowauto center>
            <Wrapper container paddingpx='100px 0 0'>
                <Text title fontsize={144} colour='gray'>Toolbar Prototype</Text>
                <Wrapper positionrelative marginpx='-150px 0 0 -88px'>
                    <img style={{maxWidth: 'inherit'}} src={Prototype2}/>
                    <video style={{position: 'absolute', 'top': '114px', left: '88px', borderRadius: '12px'}} width='962' src={PrototypeVideo} loop autoplay></video>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='lightgray' height={`${window.innerHeight}px`}>
            <Details/>
        </Wrapper>
    </Wrapper>
);

export default ProjectToolbars;
