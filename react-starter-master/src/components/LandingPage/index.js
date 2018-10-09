import React from "react"
import "./style.css"

class LandingPage extends React.Component {
  state = {
    jobs: [],
    filteredJobs: []
  }

  componentDidMount() {
    const url = "http://hellotechnigo.comprendwebsites.net/api/jobs"

    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(result => {
        this.setState({
          jobs: result,
          filteredJobs: result.slice(0, 3)
        })
        console.log(this.state.jobs)
        console.log(this.state.filteredJobs)
      })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="hero-container">
          <img src="./assets/images/comprend-hero2.webp" alt="comprend" />
          <div className="hero-info-container">
            <h1>Join us</h1>
            <p>lkjdlfkjlskdjf</p>
          </div>
        </div>
        <div className="job-suggestions-container">
          <h2>We are always looking for great people</h2>
          {this.state.filteredJobs.map(job => (
            <div className="job-suggestion">
              <div className="job-suggestion-image">
                <img src="./assets/images/job-image.webp" alt="job" />
              </div>
              <h3>{job.title}</h3>
              <p>{job.city}</p>
            </div>
          ))}
        </div>
        <div className="job-openings-container">
          <img src="./assets/images/comprend-hero-1920x800.jpg" alt="comprend" />
          <div className="job-openings-info">
            <h2>We are looking for you</h2>
            <button className="button-job-openings">Job openings</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
