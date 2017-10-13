import { h } from 'preact';
import { Wrapper, FullHeight, Centered, Text } from 'styles';

import ProjectTile from 'components/project-tile';
import Header from 'components/header';
import Details from 'components/details';
import ScrollToTopOnMount from 'components/scroll-to-top-on-mount';

import toolbarIPhoneImg from 'img/toolbars-iphone.png';
import pixelToolbarsImg from 'img/pixel-toolbars.png';
import teamValuesImg from 'img/homepage-team-values.png';
import pressAssociationImg from 'img/homepage-press-association.png';

const MOOText = () => (
        <Text fontsize={36} colour='white' center letterspacing={5} >MOO</Text>
);

const LineText = () => (
        <Text fontsize={36} colour='green' center letterspacing={5} >line...</Text>
);

const CopyText = ({colour, children}) => (
    <Text fontsize={36} colour={colour} center letterspacing={5}>{children}</Text>
);

const IconLink = ({href, icon, padding}) => (
    <a href={href} target='_blank'>
        <Text colour='green' paddingpx={padding} fontsize={30}>
            <i className={`fa fa-${icon}`}></i>
        </Text>
    </a>
);

const Homepage = () => (
    <Wrapper height='100%'>
        <ScrollToTopOnMount/>
        <Wrapper height='100%' bgc='green'>
            <Wrapper container flex centerboth column height='100%'>
                <Text marginpx='0' fontsize={144} colour='gray' title center letterspacing={20}>Nabil<br/>Sharif</Text>
                <Text fontsize={36} colour='gray' center letterspacing={5} light >
                    UI / UX designer Currently working at <Text fontsize={36} center letterspacing={5} semibold colour='white'>MOO</Text>.
                </Text>
            </Wrapper>
        </Wrapper>
        <Header/>
        <ProjectTile title='Mobile Pixel' subtitle='Responsive product creation web app' href='#mobilepixel'>
            <Wrapper paddingpx='30px 0' flex centerboth>
                <img src={toolbarIPhoneImg} style='width: 450px'/>
            </Wrapper>
        </ProjectTile>
        <ProjectTile hidemobile light title='Pixel Toolbars' subtitle='Text and image edit toolbars' href='#toolbars'>
            <Wrapper paddingpx='60px 0' flex centerboth>
                <img src={pixelToolbarsImg} style='width: 800px'/>
            </Wrapper>
        </ProjectTile>
        <ProjectTile title='Team Values' subtitle='Posters to represent our core values' href='#values'>
            <Wrapper paddingpx='0px 0' flex centerboth>
                <img src={teamValuesImg} style='width: 800px'/>
            </Wrapper>
        </ProjectTile>
        <ProjectTile light title='Press Association' subtitle='Creating a News platform' href='#pressassociation'>
            <Wrapper paddingpx='0px 0' flex centerboth>
                <img src={pressAssociationImg} style='width: 800px'/>
            </Wrapper>
        </ProjectTile>
        <Details/>
    </Wrapper>
);

export default Homepage;
