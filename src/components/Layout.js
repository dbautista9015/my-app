import React from 'react';
import { Link } from 'react-router-dom';

export class Layout extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link to="../" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="../about" className="nav-link" aria-current="page">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="../inspiration" className="nav-link" aria-current="page">Inspiration</Link>
                </li>
                <li className="nav-item">
                    <Link to="../bestWorks" className="nav-link" aria-current="page">Best Works</Link>
                </li>
            </ul>
        )
    }

}