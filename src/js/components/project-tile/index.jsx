import { h } from 'preact';
import { Wrapper, FullHeight, Centered, Text } from 'styles';

import Button from 'components/button';

const ProjectTile = ({hidemobile, title, subtitle, light, href, children}) => {
    if (navigator.userAgent.match(/Mobi/) && href === '#mobilepixel') light = !light;
    return (
        <Wrapper bgc={light ? 'white' : 'gray'} hidemobile={hidemobile}>
            <Wrapper container>
                <Wrapper center paddingpx='100px 0 0'>
                    <Text title colour={light ? 'gray' : 'green'} fontsize={58}>{title}</Text>
                </Wrapper>
                <Wrapper center marginpx='10px 0 40px'>
                    <Text light fontsize={24} colour={light ? 'gray' : 'white'}>{subtitle}</Text>
                </Wrapper>
                <Wrapper flex centerboth>
                    <Button colour={light ? 'gray' : 'green'} href={href}>View Project</Button>
                </Wrapper>
                {children}
            </Wrapper>
        </Wrapper>
    );
};

export default ProjectTile;
