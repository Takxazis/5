import React, { Component } from 'react';
import HeaderFlag from './HeaderFlag'
import Login from './Login'
import './Header.css';

const ListNames= [
    'Meu  YouBike',
    'Vender',
    'Forum',
    'Contato',
    'Ajuda',
]

class Header extends Component {
    render() {
        return (
        <ul className="Header">
            {
                ListNames.map((name)=>(
                <li className="HeaderList" key={name}> <a> {name} </a>
                </li>
                    
                ))
            }
            <HeaderFlag />
            <Login />
        </ul>);
    }
}
export default Header
