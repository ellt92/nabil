import { h } from 'preact';
import { Wrapper, Text, Bold } from 'styles';

import styled from 'styled-components';
import Header from 'components/header';
import Details from 'components/details';
import ScrollToTopOnMount from 'components/scroll-to-top-on-mount';
import InfoElement from 'components/info-element';

import Sketch1 from 'img/mobilepixel-sketch-1.png';
import Sketch2 from 'img/mobilepixel-sketch-2.png';
import Sketch3 from 'img/mobilepixel-sketch-3.png';
import Designs1 from 'img/mobilepixel-designs-1.png';
import Designs2 from 'img/mobilepixel-designs-2.png';
import Designs3 from 'img/mobilepixel-designs-3.png';
import Wireframes1 from 'img/mobilepixel-wireframes-1.png';
import Wireframes2 from 'img/mobilepixel-wireframes-2.png';
import Wireframes3 from 'img/mobilepixel-wireframes-3.png';
import Wireframes4 from 'img/mobilepixel-wireframes-4.png';
import Wireframes5 from 'img/mobilepixel-wireframes-5.png';
import Wireframes6 from 'img/mobilepixel-wireframes-6.png';
import IPhone1 from 'img/mobilepixel-iphone-1.png';
import SketchPrototypeVideo from 'vid/sketch-prototype.mov';
import DesignPrototypeVideo from 'vid/pixel-mobile-prototype.mov';

const ImageAndAnnotation = ({image, annotation}) => {
    const Img = styled.img`
        max-width: 320px;
    `;
    return (
        <Wrapper flex column>
            <Img src={image}/>
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

const ProjectMobilePixel = () => (
    <Wrapper>
        <ScrollToTopOnMount/>
        <Header/>
        <Wrapper bgc='white'>
            <Wrapper container overflowauto positionrelative>
                <Wrapper flex centerboth paddingpx='200px 0 120px'>
                        <Text title colour='green' fontsize={144}>Mobile Pixel</Text>
                </Wrapper>
                <Wrapper maxwidth='400px' paddingpx='0 0 250px 0'>
                    <Text fontsize={18} colour='gray' bold>Objective</Text>
                    <br/>
                    <br/>
                    <Text fontsize={24} colour='gray' light>To make a responsive creation experience on a small device. Which allows the user being able to move objects on the canvas to manipulate designs.</Text>
                </Wrapper>
                <Wrapper absolute top={230} right={0}>
                    <img src={IPhone1}/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='gray' overflowauto>
            <Wrapper container overflowauto>
                <InfoElement
                    leftText='Approaching the problem'
                    rightText={<span>The first <Bold>action</Bold> is to gain a better <Bold>understanding</Bold> of what the user is trying to achieve, with our <Bold>creation</Bold> software also known as <Bold>Pixel</Bold>. This would <Bold>highlight</Bold> any <Bold>difficulties</Bold> the <Bold>users</Bold> are <Bold>experiencing</Bold>.</span>}
                />
                <InfoElement
                    leftText='Analysing competitors'
                    rightText={<span>I did some <Bold>high level</Bold> analysis - to get an idea of what our <Bold>competitors</Bold> are doing and how they <Bold>approached</Bold> the <Bold>problems</Bold>.</span>}
                />
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='lightgray'>
            <Wrapper container paddingpx='100px 0'>
                <Wrapper flex centerboth paddingpx='0 0 50px'>
                    <Text title colour='gray' fontsize={58}>Sketches</Text>
                </Wrapper>
                <Wrapper flex centerboth>
                    <ImageAndAnnotation image={Sketch1} annotation='Establishing shot'/>
                    <ImageAndAnnotation image={Sketch2} annotation='Corner selection'/>
                    <ImageAndAnnotation image={Sketch3} annotation='Front edit'/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='green' hidemobile>
            <Wrapper container center paddingpx='200px 0' positionrelative>
                <Text fontsize={144} title colour='gray'>Sketch Prototype</Text>
                <Wrapper centerabsolute>
                    <img src={IPhone1}/>
                    <video style={{position: 'absolute', 'top': '50%', left: '50%', border: 'solid 3px #d0c8c8', transform: 'translateX(-50%) translateY(-51%)'}}width='216' src={SketchPrototypeVideo} loop autoplay></video>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='gray' overflowauto>
            <Wrapper overflowauto container>
                <InfoElement
                    leftText='Wireframing'
                    rightText={<span>For this project I <Bold>sketched</Bold> out some <Bold>ideas</Bold> on <Bold>paper</Bold> and turned them into a <Bold>prototype</Bold> using <Bold>Marvel</Bold>. These were then used to do some quick <Bold>guerilla testing</Bold> to give me an <Bold>early understanding</Bold> of the <Bold>pros</Bold> and <Bold>cons</Bold> regarding some of the ideas and <Bold>functionality</Bold>.</span>}
                />
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='lightgray' overflowauto>
            <Wrapper container paddingpx='100px 0'>
                <Wrapper flex centerboth paddingpx='0 0 30px'>
                    <Text title colour='gray' fontsize={58}>Wireframes</Text>
                </Wrapper>
                <Wrapper flex wrap centerboth>
                    <ImageAndAnnotation image={Wireframes1} annotation='Back Null State'/>
                    <ImageAndAnnotation image={Wireframes2} annotation='Change Layout'/>
                    <ImageAndAnnotation image={Wireframes3} annotation='Edit Text Colour'/>
                    <ImageAndAnnotation image={Wireframes4} annotation='Replace Image'/>
                    <ImageAndAnnotation image={Wireframes5} annotation='Resting State'/>
                    <ImageAndAnnotation image={Wireframes6} annotation='Text Object'/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='gray' overflowauto>
            <Wrapper overflowauto container>
                <InfoElement
                    leftText='Hypothesis based design'
                    rightText={<span>As a <Bold>team</Bold> we created a list of <Bold>Hypothesis</Bold> based on our understanding of the <Bold>problems</Bold>. These were a list of <Bold>features</Bold> that we thought were the most <Bold>important</Bold> for our <Bold>MVP</Bold>. They would also help build a case for user testing and would either <Bold>prove</Bold> the Hypothesis to be <Bold>true</Bold> or <Bold>false</Bold>.</span>}
                />
                <InfoElement
                    leftText='Visual Design'
                    rightText={<span>The <Bold>design phase</Bold> of the project was worked on in <Bold>small iterations</Bold> to make it easier to <Bold>build</Bold>, <Bold>test</Bold> and <Bold>ship</Bold>. After a first draft was created, I worked with a <Bold>prototyper</Bold> to get these built <Bold>rapid</Bold> succession, and <Bold>user testing</Bold> the Hypothesis <Bold>early</Bold> on was an <Bold>important</Bold> phase of the project.</span>}
                />
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='lightgray' overflowauto>
            <Wrapper container paddingpx='100px 0'>
                <Wrapper flex centerboth paddingpx='0 0 30px'>
                    <Text title colour='gray' fontsize={58}>Designs</Text>
                </Wrapper>
                <Wrapper flex centerboth>
                    <ImageAndAnnotation image={Designs1} annotation='Bounding box design'/>
                    <ImageAndAnnotation image={Designs2} annotation='Image rotation'/>
                    <ImageAndAnnotation image={Designs3} annotation='Text edit'/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='green' overflowauto hidemobile>
            <Wrapper container center paddingpx='200px 0' positionrelative>
                <Text fontsize={144} title colour='gray'>Design Prototype</Text>
                <Wrapper centerabsolute>
                    <img src={IPhone1}/>
                    <video style={{position: 'absolute', 'top': '50%', left: '50%', border: 'solid 2px #d0c8c8', transform: 'translateX(-50%) translateY(-51%)'}} width='220' src={DesignPrototypeVideo} loop autoplay></video>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper bgc='lightgray' height={`${window.innerHeight}px`}>
            <Details/>
        </Wrapper>
    </Wrapper>
);

export default ProjectMobilePixel;
