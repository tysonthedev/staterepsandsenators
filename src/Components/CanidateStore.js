import {action, makeObservable, observable} from "mobx"

class CanidateStore {
  canidatesInfo = []
  selectedStateAbr=""
  senatorSelected=null
  constructor() {
    makeObservable(this,{
      canidatesInfo:observable,
      updateCanidates:action
    })
  }
  
  async updateCanidates() {
      if(this.senatorSelected == null || this.selectedStateAbr === "")
      {
        if(this.senatorSelected == null){alert("you must select either senator or representative.") }
        if(this.selectedStateAbr === ""){alert("you must select a state.")}
      }
      else if(this.senatorSelected)
      {
        await fetch("http://localhost:4000/senators/" + this.selectedStateAbr)
        .then(response =>  response.json())
        .then(data => this.canidatesInfo = data["results"]);
      }
      else if(!this.senatorSelected)
      {
        await fetch("http://localhost:4000/representatives/" + this.selectedStateAbr)
        .then(response =>  response.json())
        .then(data => this.canidatesInfo = data["results"]);
      }
      this.displayedSenatorSelected = this.senatorSelected
  }
  }

const observableCanidateStore = new CanidateStore()

export default observableCanidateStore