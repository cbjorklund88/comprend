import React from "react"
import "./style.css"

class SingleJob extends React.Component {
  render() {
    return (
      <div>
        <div className="single-job-container">
          <a href="#">Back to List</a>
          <h1>Job Name</h1>
          <p>Lorem ipsum description</p>
          <img src="#" />
          <div className="single-job-button-container">
            <button>Apply</button>
            <button>Share</button>
          </div>
          <div className="single-job-description">
            API Call
          </div>
          <h2>Some Colleagues</h2>
          <div className="single-job-image-container">
            <img src="#" />
            <img src="#" />
            <img src="#" />
          </div>
          <a href="#">Back to List</a>
        </div>
      </div>
    )
  }
}

export default SingleJob
