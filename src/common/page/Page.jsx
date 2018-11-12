import React from "react";
import "./page.css"

class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="page">
          <div className="header">
            <div className="caption">{this.props.headerCaption}</div>
            <legend/>
          </div>
          <div className="body">
              {this.props.children}
          </div>
          <div className="footer">
            <legend/>
            <div><h4>All rights reserved!</h4></div>
            <div><h5>Follow us in instagram, facebook, twitter :)</h5></div>
            <div><h5>Copyright 2018</h5></div>
          </div>
        </div>  
    );
  }
}

export default Page;