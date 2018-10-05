import React from "react"
import "./style.css"

class JobListingItem extends React.Component {

  render() {

    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{(this.props.department == "3502") ? "Technology" : "Creative"}</td>
        <td>{this.props.city}</td>
      </tr>

    )
  }

}

export default JobListingItem
