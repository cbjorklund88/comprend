import React from "react"
import "./style.css"

class SingleJob extends React.Component {

  state = {
  title: "Front-End Developer to our Web-Application Team!"
  // body: ""
  }

  render() {
    // let jobObject = {}
    //
    // const url = "http://hellotechnigo.comprendwebsites.net/api/jobs/118066"
    // const req = new Request(url)
    //
    // fetch(req)
    //   .then(function(response) {
    //     return response.json()
    //   }) .then(function(result) {
    //     console.log(result)
    //     createJob(result)
    //   })
    //   console.log(jobObject)
    //
    //   const createJob = (job) => {
    //     console.log(job)
    //     jobObject = job
    //   }

    return (
      <div className="wrapper">
        <div className="single-job-container">
          <a href="#">&#8592; Back to List</a>
          <h1>{this.state.title}</h1>
          <p className="preamble">Are you passionate about client side performance and optimization, while curious to learn and develop your skills? Awesome – we are looking for a Front-End Developer who wants to create websites in Comprend’s internally developed, service based, application labelled “Website as a Service” together with our Web-Application team!</p>
          <img src="./assets/images/job-image.webp" alt="" />
          <div className="single-job-button-container">
            <button className="button-apply">Apply for the job</button>
            <button className="button-share">Share the job</button>
          </div>
          <h2>Your workday!</h2>
          <p>As a Front-End Developer at Comprend you will have a significant influence on Comprends clients&apos; visual appearance and build websites that, with focus on accessibility and user experience, will be used by thousands of customers. You will be a part of a small, start-up like, team within a large web agency with well-known clients – with the mission to deliver the best website to our clients!</p>
          <blockquote>As for Front-End technologies we use JavaScript, CSS3, HTML5 and LESS.
          You will work in our agile web team, closely with our UX designers and Back-End Developers and together create solutions, that pushes the visual limits.
          </blockquote>
          <div className="single-job-description-container">
            <div className="single-job-description-container-image">
              <img src="./assets/images/job-image.webp" alt="" />
            </div>
            <div className="single-job-description-container-text">
              <h2>Who are you?</h2>
              <p>We believe you’re savvy when it comes to Front-End web technologies such as JavaScript, CSS and HTML. You have a passion for User Experience, graphic design, accessibility and client-side performance and optimization. So, if you also have experience with User Interface that’s great, but it’s not a must.
            Most of all, we believe that you have an eye for details, are curious and open minded, want to learn and develop while also being humble, self-going and responsible.
              </p>
            </div>
          </div>
          <h2>Is Comprend the company for you?</h2>
          <p>Comprend is a full-service agency with a mission to help our clients to communicate better in the digital landscape. With an agile approach, we create innovative and consumer centric world class digital experiences using design thinking, helping our clients grow their business and succeed in digital transformation. We combine communication knowledge with digital expertise. Comprend is a proud home for 90+ multi-talented professionals, with offices in Stockholm and London.
        Health, happiness and work-life balance is important at Comprend, we offer free medical care and organise functional group training/running coaching, yoga as well as other activities. We have massage in our office twice a week and offer subsidy for gym membership or other training. We continuously work on our company culture and do weekly follow ups on wellness and happiness.
        Comprend also offers great possibilities for flexible working; from home, a coffee shop or why not from our office in London.
          </p>

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
