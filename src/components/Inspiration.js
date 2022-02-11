import React from 'react';
import '../App.css';
import { Layout } from './Layout';
import { Container, Row, Col } from 'react-bootstrap';
import KidIronMan from "../images/KidIronMan.jpeg";
import JailTime from "../images/JailTimeRobertDowneyJr.jpeg";
import IronMan3 from "../images/IronMan3.jpeg";

export class Inspiration extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="inspirationBG">
                <Layout />
                <Container fluid>
                    <Row>
                        <Col sm={6} xs={{ order: -2 }} className="d-flex justify-content-start mt-5">
                            <img src={KidIronMan} className="img-fluid" />
                        </Col>
                        <Col sm={6} xs={{ order: -1 }} className="d-flex justify-content-start align-items-center flex-column  mt-5">
                            <h1 className="text-white">Iron Man Robotic Arm</h1>
                            <p className="text-primary mt-3">One of the things why I look up to Robert Downey Jr is because he gives people hope</p>
                            <p className="text-primary mt-3">What R.D.J did for this boy Alex Pring was that he presented him with a 3D printed robotic arm</p>
                            <p className="text-primary mt-3">He gave this boy hope that his superhero came and helped him</p>
                            <p className="text-primary mt-3">What I took from this is that you dont have to be a real superhero from movies to give help to someone</p>
                            <p className="text-primary mt-3">I am trying to do the same with the people closest to me and do my best</p>
                        </Col>

                        <Col sm={6} xs={{ order: 1 }} className="d-flex justify-content-start align-items-center flex-column  mt-5">
                            <h1 className="text-white">Bounce Back</h1>
                            <p className="text-primary mt-3">There are many people who go through alot of rough times in life and people judge them for that</p>
                            <p className="text-primary mt-3">What I learned from RDJ is that you can have alot of bumps in the road but you can always make something of yourself even at your lowest point</p>
                            <p className="text-primary mt-3">This also coincides with my life with that I have had many downfalls and times where I thought my life was not going anywhere</p>
                            <p className="text-primary mt-3">Although different situations, looked up to R.D.J and gave me hope for my life and it has turned for the better</p>
                        </Col>

                        <Col sm={6} xs={{ order: 0 }} className="d-flex justify-content-start mt-5">
                            <img src={JailTime} className="img-fluid" />
                        </Col>

                        <Col sm={6} xs={{ order: 2 }} className="d-flex justify-content-start mt-5">
                            <img src={IronMan3} className="img-fluid" />
                        </Col>

                        <Col sm={6} xs={{ order: 3 }} className="d-flex justify-content-start align-items-center flex-column  mt-5">
                            <h1 className="text-white">I am Iron Man</h1>
                            <p className="text-primary mt-3">Even though this character is fictional, I am still inspired by the lessons taught in the MCU</p>
                            <p className="text-primary mt-3">Tony Stark first starts out as a Genius, Billionaire, Chick Magnet, and philanthropist, he also only thought of only himself</p>
                            <p className="text-primary mt-3">What I look up to in Tony Stark is that he is human</p>
                            <p className="text-primary mt-3">There are times where he makes mistakes, but as each movie passes, he is caring and only thinks of others than him and in the end, he makes the ultimate sacrifice to save humanity</p>

                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}