import styled, { injectGlobal, css } from 'styled-components';
import Lazer84 from 'fonts/Lazer84.ttf';
import OpenSans from 'fonts/Open_Sans/OpenSans-Regular.ttf';
import OpenSansBold from 'fonts/Open_Sans/OpenSans-Bold.ttf';
import OpenSansSemiBold from 'fonts/Open_Sans/OpenSans-SemiBold.ttf';
import OpenSansLight from 'fonts/Open_Sans/OpenSans-Light.ttf';

export const media = {
    phone: (...args) => css`
        @media (max-width: 959px) {
            ${ css(...args) }
        }
    `,
    desktop: (...args) => css`
        @media (min-width: 960px) {
            ${ css(...args) }
        }
    `
};

injectGlobal`
    html, body, #react-top-level {
        margin: 0;
        height: 100%;
    }
    a, u {
        text-decoration-line: none !important;
        text-decoration: none !important;
        color: inherit;
    }
    img {
        max-width: 100%;
    }
    @font-face {
        font-family: Lazer84;
        src: url('${Lazer84}') format('opentype');
    }
    @font-face {
        font-family: OpenSans;
        src: url('${OpenSans}') format('opentype');
    }
    @font-face {
        font-family: OpenSansBold;
        src: url('${OpenSansBold}') format('opentype');
    }
    @font-face {
        font-family: OpenSansSemiBold;
        src: url('${OpenSansSemiBold}') format('opentype');
    }
    @font-face {
        font-family: OpenSansLight;
        src: url('${OpenSansLight}') format('opentype');
    }
    @keyframes flash {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
`;

/*
 * Mixins
 */

// Box Model

export const getDisplay = p => {
    let display;
    if (p.flex) display = 'flex';
    else if (p.inlineblock) display = 'inline-block';
    else display = 'block';
    return `display: ${display};`;
};

export const getFlexControls = p => {
    let flexDirection = p.rowreverse ? 'row-reverse' : p.column ? 'column' : null;
    let flexWrap;
    if (p.wrap) {
        flexWrap = 'flex-wrap: wrap;';
    }
    let alignItems = p.centerboth || p.aligncenter ? 'center' : 'none';
    let justifyContent;
    if (p.centerboth || p.justifycenter) justifyContent = 'center';
    else if (p.justifyspacebetween) justifyContent = 'space-between';
    return `flex-direction: ${flexDirection}; align-items: ${alignItems}; justify-content: ${justifyContent};${flexWrap}`;
};

export const getElementSizing = p => {
    const width = `width: ${p.width};`;
    const height = `height: ${p.height};`;
    const minwidth = `min-width: ${p.minwidth};`;
    const minheight = `min-height: ${p.minheight};`;
    const maxwidth = `max-width: ${p.maxwidth};`;
    const maxheight = `max-height: ${p.maxheight};`;
    return `${width} ${height} ${minwidth} ${minheight} ${maxwidth} ${maxheight}`;
};

// Font

export const getFont = p => {
    let font;
    if (p.title) font = 'Lazer84';
    else if (p.bold) font = 'OpenSansBold';
    else if (p.semibold) font = 'OpenSansSemiBold';
    else if (p.light) font = 'OpenSansLight';
    else font = 'OpenSans';
    return `font-family: ${font};`;
};

export const getMobileFontSize = p => {
    if (p.fontsizemobile) {
      return `
          font-size: ${p.fontsizemobile}px;
          letter-spacing: 8px;
      `;
    }
    if (Number.isInteger(p.fontsize)) {
        if (p.fontsize === 144) {
            return `
                font-size: 46px;
                letter-spacing: 8px;
            `;
        }
        if (p.fontsize === 84) {
            return `
                font-size: 32px;
                letter-spacing: 6px;
                width: 100%;
            `;
        }
        if (p.fontsize === 36) {
            return `
                font-size: 20px;
                letter-spacing: 3px;
            `;
        }
        if (p.fontsize === 24) {
            return `
                font-size: 18px;
            `;
        }
        if (p.fontsize === 58) {
            return `
                font-size: 42px;
            `;
        }
        if (p.fontsize === 18) {
            return `
                font-size: 14px;
            `;
        }
    }
};

export const getFontSize = p => {
    if (Number.isInteger(p.fontsize)) {
        return `font-size: ${p.fontsize}px;`;
    }
    let size;
    switch(p.fontsize) {
        case 'title':
            size = '40px';
        case 'subtitle':
            size = '32px';
        case 'lead':
            size = '24px';
        case 'small':
            size = '12px';
        case 'xsmall':
            size = '8px';
        default:
            size = '16px';
    }
    return `font-size: ${size};`;
};

export const getLetterSpacing = p => {
    if (Number.isInteger(p.letterspacing)) {
        return `letter-spacing: ${p.letterspacing}px;`;
    } else {
        return `letter-spacing: initial;`;
    }
};

export const getFontWeight = p => {
    let weight;
    switch(p.fontweight) {
        case 'bold':
            weight = 'bold';
        default:
            weight = 'unset';
    }
    return `font-weight: ${weight};`;
};

export const getTextAlign = p => {
    let textAlign = p.center ? 'center' : 'none';
    return `text-align: ${textAlign};`;
};

// Colours / Background

const colourSwitch = colour => {
    switch (colour) {
        case 'green':
            return '#0EF59F';
        case 'greenhighlight':
            return '#68FCC5';
        case 'black':
            return '#242024';
        case 'white':
            return 'white';
        case 'trueblack':
            return 'black';
        case 'gray':
            return '#413D41';
        case 'grayhighlight':
            return '#696969';
        case 'lightgray':
            return '#EEEEEE';
        case 'darkgray':
            return '#191919';
        default:
            return '';
    }
};

export const getColour = p => {
    let colour = colourSwitch(p.colour);
    return `color: ${colour};`;
};

export const getBGColour = p => {
    let colour = colourSwitch(p.bgc);
    return `background-color: ${colour};`;
};

export const getHoverHighlightColour = p => {
    let colour = colourSwitch(p.hhc);
    return `background-color: ${colour};`;
};

export const getBackgroundImage = p => {
    if (p.bgi) {
        return `background-image: url(${p.bgi});`;
    } else {
        return '';
    }
};

/*
 * Layout Elements
 */
export const Container = styled.div`
    ${getDisplay}
    ${getBGColour}
    ${getBackgroundImage}
    ${getFlexControls}
    max-width: 1124px;
    margin: 0 auto;
    padding: 0 24px;
`;

export const Wrapper = styled.div`
    ${getDisplay}
    ${getBGColour}
    ${getBackgroundImage}
    ${getFlexControls}
    ${getElementSizing}
    ${getTextAlign}
    * {
        margin-left: ${p => p.spacechildren ? '24px' : 'none'};
    }
    *:first-child {
        margin-left: ${p => p.spacechildren ? '0px' : 'none'};
    }
    margin: ${p => {
        if (p.marginpx) return `${p.marginpx}`;
        if (p.margin) return '24px 0';
        else if (p.thinmargin) return '16px 0';
        else return 'none';
    }};
    padding: ${p => {
        if (p.paddingpx) return `${p.paddingpx}`;
        if (p.padding) return '24px 0';
        else if (p.thinpadding) return '16px 0';
        else return 'none';
    }};
    overflow: ${p => p.overflowauto ? 'auto' : 'none'};
    position: ${p => p.positionrelative ? 'relative' : null};
    ${p => p.centerabsolute ? `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    ` : ''}
    ${p => p.absolute ? `
        position: absolute;
        top: ${p.top}px;
        right: ${p.right}px;
        left: ${p.left}px;
        bottom: ${p.bottom}px;
    ` : ''}
    ${p => p.container ? `
        max-width: 960px;
        margin: 0 auto;
        overflow: visible;
    ` : ''};
    ${media.phone`
        ${p => p.container ? `
            padding-left: 20px;
            padding-right: 20px;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.paddingpx == '100px 0 0' ? `
            padding: 50px 0 0;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.paddingpx == '100px 0' ? `
            padding: 50px 0;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.paddingpx == '0 0 30px' ? `
            padding: 0;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.paddingpx == '0 0 50px' ? `
            padding: 0;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.marginpx == '-94px 0 100px' ? `
            margin: 30px 0px 50px;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.paddingpx == '0 0 100px' ? `
            padding: 0;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.marginpx == '30px 0 90px 0' ? `
            margin: 30px 0 30px 0;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.marginpx == '150px 0 150px 0' ? `
            margin: 75px 0 75px 0;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.marginpx == '-125px 0 50px' ? `
            margin: 0;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.marginpx == '-125px auto 50px' ? `
            margin: 0;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.marginpx == '30px 0 0' || p.marginpx == '-50px 0 0' ? `
            margin: 0;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.paddingpx == '200px 0 120px' || p.paddingpx == '200px 0 0'? `
            padding: 130px 0 50px 0;
            text-align: center;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.paddingpx == '0 0 250px 0' ? `
            padding: 0 0 0 0;
        ` : ''};
    `}
    ${media.phone`
        ${p => p.absolute && p.top ? `
            position: initial;
        ` : ''};
    `}
    ${media.phone`
        flex-wrap: wrap;
        ${p => p.hidemobile ? 'display: none;': ''}
    `}

`;

/*
 * Text Elements
 */
export const Title = styled.h1`
    ${getFont}
    ${getFontSize}
    ${getColour}
    margin: 24px 0 8px;
`;

export const SubTitle = styled.h3`
    ${getFont}
    ${getFontSize}
    ${getColour}
    font-size: 32px;
    margin: 16px 0 8px;
`;

export const P = styled.p`
    ${getFont}
    ${getFontSize}
    ${getFontWeight}
    ${getColour}
    margin: 8px 0;
    ${media.phone`
        text-align: ${p => p.center ? 'center' : 'justify'};
    `}
    // must come after media query
    ${getTextAlign}
`;

export const Text = styled.span`
    ${getFont}
    ${media.phone`
        ${getMobileFontSize}
    `}
    ${getFontSize}
    ${getLetterSpacing}
    ${getFontWeight}
    ${getColour}
    ${getTextAlign}
    margin: ${p => {
        if (p.marginpx) return `${p.marginpx}`;
        if (p.margin) return '24px 0';
        else if (p.thinmargin) return '16px 0';
        else return 'none';
    }};
    padding: ${p => {
        if (p.paddingpx) return `${p.paddingpx}`;
        if (p.padding) return '24px 0';
        else if (p.thinpadding) return '16px 0';
        else return 'none';
    }};
    ${media.phone`
        ${p => p.marginpx == '0' ? `
            margin: 0 0 15px;
        ` : ''};
    `}
`;

export const Bold = styled.span`
    ${getFont({bold: true})}
`;
