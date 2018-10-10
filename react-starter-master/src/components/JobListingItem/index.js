import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class JobListingItem extends React.Component {

  render() {
    return (
      <tr>
        <td><Link to={`/jobs/${this.props.id}`}>{this.props.title}</Link></td>
        <td>{(this.props.department === "3502") ? "Technology" : "Creative"}</td>
        <td>{this.props.city}</td>
      </tr>
    )
  }

}

export default JobListingItem
