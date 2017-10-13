import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media, Wrapper } from 'styles';

import HeaderImg from 'img/header.png';

function scrollEvent(event) {
    var last_known_scroll_position = 0;
    var ticking = false;

    function doSomething(scroll_pos) {
        event();
    }

    window.addEventListener('scroll', function(e) {
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function() {
          doSomething(last_known_scroll_position);
          ticking = false;
        });
      }
      ticking = true;
    });

};

const HeaderElement = styled(Wrapper)`
    height: 80px;
    top: 0;
    left: 0;
    position: fixed;
    opacity: ${p => p.visible ? 1 : 0};
    transition: opacity 0.5s;
    z-index: 9000;
`;

const HeaderImageElement = styled.img`
    height: 80px;
    max-width: 1020px !important;
    ${media.phone`
        margin-left: -80px;
    `}
`;

const HeaderBlackElement = styled(Wrapper)`
    position: fixed;
    width: 3840px;
    margin-left: 375px;
`;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    componentDidMount() {
        const eventFunction = () => {
            if (window.scrollY <= (window.innerHeight / 4 * 3)) {
                this.setState({visible: false});
            } else {
                this.setState({visible: true});
            }
        };
        scrollEvent(eventFunction);
    }
    render() {
        const isHomepage = window.location.hash == '#/';
        const { visible } = this.state;
        return (
            <HeaderElement flex visible={isHomepage ? visible : true}>
                <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                    <HeaderImageElement src={HeaderImg}/>
                </Link>
                <HeaderBlackElement width='3840px' height='80px' bgc='darkgray'/>
            </HeaderElement>
        );
    };
};

export default Header;
