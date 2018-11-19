import React, { Component } from 'react';
import './stylesHeaderRight.css'

class HeaderFlag extends Component {
    render() {
        return (<li className="HeaderList">
        <div className="VerticalLine" />
            <a> <i className="fa fas fa-flag flag"></i>Nubhas Ofertas</a>
        </li>
        );
    }
}
export default HeaderFlag