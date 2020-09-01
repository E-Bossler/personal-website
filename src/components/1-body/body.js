import React, { Component } from "react";
// import "./App.css";
import About from '../../components/2-about-me/about';
import Resume from '../../components/2-resume/resume';
import Passions from '../../components/2-passions/passions';


class Body extends Component {
    render() {
        return(
            <div>
                Body Text
                <About>

                </About>
                <Resume>

                </Resume>
                <Passions>

                </Passions>
            </div>
        )
    }
}

export default Body;