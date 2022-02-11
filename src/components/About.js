import React from 'react';
import { Layout } from '../components/Layout';

import "../App.css";

export class About extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="aboutBG">
                <Layout />
            </div>
            
            
        );
    }
}