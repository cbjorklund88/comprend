import React from "react"
import "./style.css"

class JobListing extends React.Component {

  state = {
    jobs: []
  }

  componentDidMount() {

    const url = "http://hellotechnigo.comprendwebsites.net/api/jobs"

    fetch(url)
      .then(response => {
        return response.json()
      }).then(result => {
        this.setState({
          jobs: result
        })
        console.log(this.state.jobs)
      // checkForQuotes()
      })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="job-listing-container">
          <h1>Job openings</h1>
          <p>Text text</p>
          <div className="job-listing-button-container">
            <button className="button-department">Department<img src="./assets/images/arrowdown.svg" alt="" /></button>
            <button className="button-city">City</button>
          </div>
        </div>
      </div>

    )
  }

}

export default JobListing
