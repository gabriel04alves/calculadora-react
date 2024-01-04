import React, {Component} from "react";
import './Header.css'
import '../index'
import calc from '../assets/images/calc.svg'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header" >
                    <img className="calc-logo" src={calc} alt="calc" /> 
                    <p data-aos="zoom-in-up" data-duration="2500">Calculadora - React JS</p>
                </div>
            </div>
        )
    }
}