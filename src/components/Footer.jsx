import React, {Component} from "react";
import './Footer.css'
import '../index'
import github from '../assets/images/github.svg'
import linkedin from '../assets/images/linkedin.svg'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p className="text-footer" >
                    <img className="logo" src={github} alt="github" />
                    {/* <img className="logo" src="../assets/images/github.svg" alt="github" /> */}
                    <a className="text-footer" href="https://github.com/gabriel04alves">
                        /gabriel04alves
                    </a>
                </p>
                <p className="text-footer">
                    <img className="logo" src={linkedin} alt="linkedin" />
                    {/* <img className="logo" src="../assets/images/linkedin.svg" alt="linkedin" /> */}
                    <a className="text-footer" href="https://linkedin.com/in/gabriel04alves">
                        /gabriel04alves
                    </a>
                </p>
            </div>
        )
    }
}