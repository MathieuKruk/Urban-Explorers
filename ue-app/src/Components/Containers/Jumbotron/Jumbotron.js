import React from 'react';
import { Jumbotron, Col,  } from 'react-bootstrap';

class JumbotronHeader extends React.Component{
    render() {
        return  <Jumbotron fluid={true} className={'mb-4'}>
                    <Col className={'pb-5 text-center justify-content-center align-items-center'}>
                        <h1 className={'jumbTitle'}>JUMBOTRON</h1>        
                    </Col>
                </Jumbotron>

    }  
}

export default JumbotronHeader;