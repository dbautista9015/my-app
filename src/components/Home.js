import React from 'react';
import "../App.css";
import body from "../App.css";
import { Layout } from "./Layout";

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="homeBG">
                <Layout />
            </div>            
        );
    }
}