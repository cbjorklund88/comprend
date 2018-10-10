import React from "react"
import "./style.css"

class LandingPage extends React.Component {
  state = {
    jobs: [],
    filteredJobs: [],
    employees: [],
    filteredEmployees: []
  }

  componentDidMount() {

    // Get Jobs from jobs-API
    const JobsUrl = "http://hellotechnigo.comprendwebsites.net/api/jobs"

    fetch(JobsUrl)
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

      // Get Emplyees from employee-API
    const employeesUrl = "http://hellotechnigo.comprendwebsites.net/api/users"
    // Fetch code for EMPLOYEES
    fetch(employeesUrl)
      .then(response => {
        return response.json()
      })
      .then(result => {
        this.setState({
          employees: result,
          filteredEmployees: result.slice(0, 5)
        })
        console.log(this.state.employees)
        console.log(this.state.filteredEmployees)
      })
  }
  render() {
    return (
      <div className="wrapper">
        <div className="hero-container">
          <img src="./assets/images/hero-office-image.jpg" alt="comprend" />
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
        <h2>Meet the people of Comprend</h2>
        <div className="landing-page-image-container">
          {this.state.filteredEmployees.map(employee => (
            <div className="landing-page-image-container-portrait">
              <img src={employee.pictureUrl} alt="people of comprend" />
              <p>{employee.name}</p>
            </div>
          ))}
        </div>
        <button className="button-coworkers">More coworkers</button>
      </div>
    )
  }
}

export default LandingPage
