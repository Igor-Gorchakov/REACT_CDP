import React from "react";
import "./logo.css";

import { Image } from "react-bootstrap";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo-container">

        {this.props.logoImage && <div className="logo-item image left"><Image src={this.props.logoImage}/></div> }
        
        {this.props.courseNumber && <div className="logo-item"> Courses  > Course/{this.props.courseNumber}</div>}

        {this.props.userLogin && 
            <div className="logo-item right">
                <div>User login : {this.props.userLogin}</div>
                <div><a href="/logout">Logout</a></div> 
            </div>
        }

      </div>
    )
  }
}

export default Logo;