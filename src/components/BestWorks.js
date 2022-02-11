import React from 'react';
import '../App.css'
import {Container, Row, Col } from 'react-bootstrap';

import { Layout } from './Layout';

import IronManPoster from "../images/IronManPoster.jpg"
import TropicThunder from "../images/TropicThunder.jpeg"
import SherlockHomes from "../images/SherlockHomes.jpg";
import Chaplin from "../images/Chaplin.png"


//http://www.omdbapi.com/?apikey=[yourkey]&

export class BestWorks extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="bestWorksBG">
                <Layout />
                <Container fluid>
                    <Row>
                        <Col className="d-flex justify-content-start mt-5">
                            <img src={IronManPoster} className="img-fluid" />
                        </Col>
                        <Col sm={6} xs={{ order: -1 }} className="d-flex justify-content-start align-items-center flex-column  mt-5">
                            <img src={Chaplin} className="img-fluid" />
                        </Col>

                        <Col sm={6} xs={{ order: 1 }} className="d-flex justify-content-start align-items-center flex-column  mt-5">
                            <img src={SherlockHomes} className="img-fluid" />
                        </Col>

                        <Col sm={6} xs={{ order: 0 }} className="d-flex justify-content-start mt-5">
                            <img src={TropicThunder} className="img-fluid" />
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
    
}