import React from "react";

function CoursesContainer(props) {
    return React.Children.map(props.children, child => (
        <div className="course-item">{child}</div>
      ));
}

export default CoursesContainer;