import React from 'react'
import '../css/CanidateListItem.css'

class CanidateListItem extends React.Component {
    constructor() {
        super();
        this.props = {
          name: "Name",
          partyAffiliation:"Party Affiliation",
          index:0,
          selected:false,
          selectedColor:"",
          updateSelectedIndex:null,
          makeStatic:false
        }
    }
    render() {
      return(          
      <div
      onClick={this.props.makeStatic || this.props.selected ? "" : () => this.props.updateSelectedIndex(this.props.index)}
      style={!this.props.makeStatic && this.props.selected ? {backgroundColor:this.props.selectedColor} : {}}
      className="canidateListItem"
      >
      <p>{this.props.name}</p>
      <p>{this.props.partyAffiliation}</p>
    </div>)
    }
}

export default CanidateListItem