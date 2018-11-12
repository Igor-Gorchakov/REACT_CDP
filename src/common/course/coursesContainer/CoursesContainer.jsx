import React from "react";
import "./coursesContainer.css"
class CoursesContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return React.Children.map(this.props.children, child => (
      <div className="course-item">{child}</div>
    ));
  }
}
  
export default CoursesContainer;