import React from "react";
import "./courseItem.css";
import PropTypes from 'prop-types';

class CourseItem extends React.Component {

  constructor(props) {
    super(props);
    this.getAuthors = this.getAuthors.bind(this);
  }

  getAuthors() {
    return this.props.authors.join(", ");
  }

  render() {
    return (
      <div className="course-item-container">
          <div className="course-info-item-container">
            <span id="Caption" className="course-info-item"><h4>{this.props.caption}</h4></span>
            <span id="Description" className="course-info-item"><h6>{this.props.description}</h6></span>
            <span id="Date" className="course-info-item"><h5>{this.props.date}</h5></span>
            <span id="Authors" className="course-info-item"><h6>{this.getAuthors()}</h6></span>
            <span id="Duration" className="course-info-item"><h6>{this.props.duration}</h6></span>
          </div>
          <div className="controls-item-container">
            <button id="EditCourse" className="control-item">Edit course</button>
            <button id="DeleteCourse" className="control-item">Delete course</button>
           </div>
      </div>
    );
  }
}

CourseItem.propTypes = {
  caption: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  authors: PropTypes.array,
  duration: PropTypes.string,
}
  
export default CourseItem;