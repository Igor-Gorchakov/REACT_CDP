import React from "react";
import {Button, FormControl} from "react-bootstrap";
import "./searchCoursesPanel.css"

class SearchCoursesPanel extends React.Component {
    render() {
        return (
            <div className="search-courses-panel">
                <div className="panel-item">
                    <FormControl type="text" placeholder="Type caption or date" />
                </div>
                <div className="panel-item">
                    <Button bsStyle="info">Search</Button>
                </div>
                <div className="panel-item">
                    <Button bsStyle="success">Add new course</Button>
                </div>
            </div>        
        )
    }
}
  
export default SearchCoursesPanel;