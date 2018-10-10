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
    const jobImages = [
      "./assets/images/job1.jpg",
      "./assets/images/job2.jpg",
      "./assets/images/job3.jpg",
      "./assets/images/job4.jpg",
      "./assets/images/job5.jpg",
      "./assets/images/job6.jpg"
    ]
    return (
      <div className="wrapper">
        <div className="hero-container">
          <img src="./assets/images/hero-office-image.jpg" alt="comprend" />
          <div className="hero-info-container">
            <h1>Join us</h1>
            <p>We are Comprend. If you’re curious, creative and<br />
            passionate about digital communication – get in <br />
            touch to explore our world!</p>
          </div>
        </div>
        <div className="job-suggestions-container">
          <h2>We are always looking for great people</h2>
          {this.state.filteredJobs.map((job, index) => (
            <div className="job-suggestion">
              <p>{job.city}</p>
              <div className="job-suggestion-image">
                <img src={jobImages[index]} alt="job" />
              </div>
              <h3>{job.title}</h3>
            </div>
          ))}
          <div className="comprend-pitch-container">
            <h2>Everything we do is about helping our clients communicate</h2>
            <p>
              Our belief is that communication takes place between people,
              increasing knowledge and encouraging action. For companies to be
              successful, they need employees, customers, suppliers and the public
              to know as much as possible about what the company does, how they
              do it and what they stand for. The companies that do this best will
              be the most successful, and our aim is to help them on this journey.
            </p>
          </div>
        </div>

        <div className="job-openings-container">
          <img src="./assets/images/office-fistbump.jpg" alt="comprend" />
          <div className="job-openings-info">
            <div className="transparent-background-container" />
            <h2>We are looking for you</h2>
            <button className="button-job-openings">Job openings</button>
          </div>
        </div>
        <div className="landing-page-image-container">
          <h2>Meet the people of Comprend</h2>
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
