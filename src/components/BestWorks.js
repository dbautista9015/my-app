import React from 'react';
import '../App.css'

import { Layout } from './Layout';

export class BestWorks extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="bestWorksBG">
                <Layout />
            </div>
        )
    }
    
}