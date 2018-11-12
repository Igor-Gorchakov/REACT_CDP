import React from "react";
import {Image} from "react-bootstrap";
import infoImage from "./info.png";
import "./courseLogo.css"

class CourseLogo extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="cource-logo-container">
                <div className="cource-logo-item logo-image">
                    <Image src={infoImage} />
                </div>

                <div className="cource-logo-item">
                    Courses  > Course/{this.props.courseNumber}
                </div>
                
                <div className="cource-logo-item">
                    <div>User login : {this.props.userLogin}</div>
                    <div><a href="/logout">Logout</a></div>
                </div>
            </div>
        )
    }
}
  
export default CourseLogo;