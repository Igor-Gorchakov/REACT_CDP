import React from "react";
import {Image} from "react-bootstrap";
import logoImage from "./courses-logo.jpeg";
import "./coursesLogo.css"

class CoursesLogo extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="cources-logo-container">
                <div className="cources-logo-item logo-image">
                    <Image src={logoImage} />
                </div>
                <div className="cources-logo-item">
                    <div>User login : {this.props.userLogin}</div>
                    <div><a href="/logout">Logout</a></div>
                </div>
            </div>
        )
    }
}
  
export default CoursesLogo;