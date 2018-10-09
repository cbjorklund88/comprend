import React from "react";
import "./style.css";

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
          filteredJobs: result
        })
        console.log(this.state.jobs)
        console.log(this.state.filteredJobs)
      })
  }

  render() {
    return (
      <div className="wrapper">
        LANDING PAGE!
      </div>
    )
  }
}

export default LandingPage
