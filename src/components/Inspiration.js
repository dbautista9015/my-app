import React from 'react';
import '../App.css';
import { Layout } from './Layout';

export class Inspiration extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="inspirationBG">
                <Layout />
            </div>
        )
    }
}