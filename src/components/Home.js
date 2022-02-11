import React from 'react';
import "../App.css";
import body from "../App.css";
import { Layout } from "./Layout";
import { Container, Row, Col } from 'react-bootstrap';

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="homeBG">
                <Layout />
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center text-white mt-4">
                            <h1>“The lesson is that you can still make mistakes and be forgiven.”</h1>
                        </Col>
                    </Row>
                </Container>
            </div>            
        );
    }
}