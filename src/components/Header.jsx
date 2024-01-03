import React, {Component} from "react";
import './Header.css'
import '../index'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header" >
                    <p data-aos="zoom-in-up" data-duration="2500">Calculadora em React</p>
                </div>
            </div>
        )
    }
}