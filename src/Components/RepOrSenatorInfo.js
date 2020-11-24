import React from 'react'
import '../css/RepOrSenatorInfo.css'

class RepOrSenatorInfo extends React.Component
{
    constructor()
    {
        super()
        this.props = {
            firstName:"",
            lastName:"",
            district:"N/A",
            phone:"",
            office:"",
            link:""
        }
    }
    render()
    {
      return(
        <div id="repOrSenatorInfoParent">
          <p className="label">Info</p>
          <div id="repOrSenatorInfo">
            <p className="infoText">{this.props.firstName}</p>
            <p className="infoText">{this.props.lastName}</p>
            <p className="infoText">{this.props.district === "" ? 'N/A' : this.props.district}</p>
            <p className="infoText">{this.props.phone}</p>
            <p className="infoText">{this.props.office}</p>
            <a className="infoText" href={this.props.link}>{this.props.link}</a>
          </div>
        </div>
          )
    }
}

export default RepOrSenatorInfo