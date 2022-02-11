import React from 'react';
import { Layout } from '../components/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import EarlyLife from "../images/YoungRobertDowneyJr.webp";
import OrangeSuit from "../images/OrangeSuitRobertDowneyJr.jpeg";
import Ressurgence from "../images/RessurgenceRobertDowneyJr.jpeg";

import "../App.css";

export class About extends React.Component {
    constructor(props) {
        super(props);

    }

    

    render() {

        return (
            <div className="aboutBG">
                <Layout />
                <Container fluid>
                    <Row>
                        <Col sm={6} xs={{order: -2}} className="d-flex justify-content-start mt-5">
                            <img src={EarlyLife} className="img-fluid"/>
                        </Col>
                        <Col sm={6} xs={{order:-1}} className="d-flex justify-content-start align-items-center flex-column  mt-5">
                            <h1 className="text-white">Early Life</h1>
                            <p className="text-primary mt-3">Robert Downey Jr. was born in the great city of New York</p>
                            <p className="text-primary mt-3">His family consist of his well known father Robert Downey, his mother Elsie and is the youngest of two other children</p>
                            <p className="text-primary mt-3">During the start of his ealy career movie roles, he started in minor roles with the help of his father</p>
                            <p className="text-primary mt-3">His first time being in a show that he started was in Pound, where he played a sick puppy</p>
                        </Col>

                        <Col sm={6} xs={{order: 1}} className="d-flex justify-content-start align-items-center flex-column  mt-5">
                            <h1 className="text-white">Career Setbacks</h1>
                            <p className="text-primary mt-3">R.D.J has had a rough after his initial early career dealing with drug addiction</p>
                            <p className="text-primary mt-3">He has had this issue since an early age, since his father give it to him</p>
                            <p className="text-primary mt-3">R.D.J was then arrested multiple times with charges relating to cocaine and numerous drugs</p>
                            <p className="text-primary mt-3">He was then later sent to rehab for his drug addiction, which resulted in him not doing jail time</p>
                        </Col>
                        
                        <Col sm={6} xs={{order: 0}} className="d-flex justify-content-start mt-5">
                            <img src={OrangeSuit} className="img-fluid"/>
                        </Col>

                        <Col sm={6} xs={{order: 2}} className="d-flex justify-content-start mt-5">
                            <img src={Ressurgence} className="img-fluid"/>
                        </Col>

                        <Col sm={6} xs={{order: 3}} className="d-flex justify-content-start align-items-center flex-column  mt-5">
                            <h1 className="text-white">Career Comeback</h1>
                            <p className="text-primary mt-3">Now after having many issues with drug addiction, movie companies where calling him to play in their movies</p>
                            <p className="text-primary mt-3">One of his return to media was voice acting in an episode of Family Guy</p>
                            <p className="text-primary mt-3">Then his ground breaking movies that annouced his return was Iron Man and Tropic Thunder </p>
                            <p className="text-primary mt-3">Since then, he has appeared in many marvel movies and was at one point the most paid actor in Hollywood</p>
                            
                        </Col>

                    </Row>
                </Container>
            </div>
            
            
        );
    }
}