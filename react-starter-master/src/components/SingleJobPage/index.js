import React from "react"
import "./style.css"

class SingleJob extends React.Component {

  state = {
    singleJob: {}
  }

  // checkForQuotes = () => {
  //   if (!this.state.singleJob.quote) {
  //
  //   }
  // }
  componentDidMount() {

    const url = "http://hellotechnigo.comprendwebsites.net/api/jobs/47238"

    fetch(url)
        return response.json()
      }).then(result => {
        this.setState({
          singleJob: result
        })
        console.log(this.state.singleJob)
        // checkForQuotes()
      })

  }
  render() {

    const {
      title,
      intro,
      quote,
      workday,
      aboutYou,
      match,
      city
    } = this.state.singleJob

    return (
      <div className="wrapper">
        <div className="single-job-container">
          <a href="#">&#8592; Back to List</a>
          <h1>{title}</h1>
          <p className="preamble"><span>{city}. </span>{intro}</p>
          <img src="./assets/images/job-image.webp" alt="" />
          <div className="single-job-button-container">
            <button className="button-apply">Apply for the job</button>
            <button className="button-share">Share the job</button>
          </div>
          <h2>Your workday</h2>
          <p>{workday}</p>
          {quote && <blockquote>{quote}</blockquote>}
          <div className="single-job-description-container">
            <div className="single-job-description-container-image">
              <img src="./assets/images/job-image.webp" alt="" />
            </div>
            <div className="single-job-description-container-text">
              <h2>Who are you?</h2>
              <p>{aboutYou}</p>
            </div>
          </div>
          <h2>Is Comprend the company for you?</h2>
          <p>{match}</p>

          <h2>#comprendlife</h2>
          <p>The things we do are exciting and meaningful – our work makes a difference to our clients and we are committed to contributing to success.
        And we deliver well. We are proud of what we achieve and try to celebrate our victories.
        We have a firm belief that team work pays off. We like each other and help each other out.
        Our reality means we need to constantly change the way we think and work on our development. We are eager to learn from each other's experiences and to follow what goes on in the world outside Comprend. We have a flat organisation, an open climate and we'd love to hear about your crazy ideas!
          </p>

          <h2 className="center-text">Some of your colleagues</h2>
          <div className="single-job-image-container">
            <div className="single-job-image-container-portrait">
              <img src="./assets/images/AliciaMollbrink.webp" alt="" />
            </div>
            <div className="single-job-image-container-portrait">
              <img src="./assets/images/AliciaMollbrink.webp" alt="" />
            </div>
            <div className="single-job-image-container-portrait">
              <img src="./assets/images/AliciaMollbrink.webp" alt="" />
            </div>
          </div>
          <div className="single-job-navigation-container">
            <div className="single-job-navigation-item left-text">
              <a href="#">&#8592; Previous Post</a>
            </div>
            <div className="single-job-navigation-item">
              <a href="#">Back to List</a>
            </div>
            <div className="single-job-navigation-item right-text">
              <a href="#">Next Post &#8594;</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleJob
