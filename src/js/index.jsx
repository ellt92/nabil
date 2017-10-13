import {h, render} from 'preact';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';

import { Wrapper } from 'styles';
import Homepage from 'components/homepage';
import ProjectMobilePixel from 'components/project-mobile-pixel';
import ProjectToolbars from 'components/project-toolbars';
import ProjectTeamValues from 'components/project-team-values';
import ProjectPressAssociation from 'components/project-press-association';

render((
    <div id='react-top-level'>
        <Router>
            <Wrapper height={'100%'}>
                <Route exact path='/' component={Homepage}/>
                <Route path='/mobilepixel' component={ProjectMobilePixel}/>
                <Route path='/toolbars' component={ProjectToolbars}/>
                <Route path='/values' component={ProjectTeamValues}/>
                <Route path='/pressassociation' component={ProjectPressAssociation}/>
            </Wrapper>
        </Router>
    </div>
), document.body);
