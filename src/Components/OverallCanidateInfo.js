import React from 'react'
import canidateStore from './CanidateStore'
import SearchBar from './SearchBar'
import CanidateList from './CanidateList'
import RepOrSenatorInfo from './RepOrSenatorInfo'
import '../css/OverallCanidateInfo.css'

class OverallCanidateInfo extends React.Component
{
    constructor(){
        super()
        this.state = {
            selectedIndex:0,
            senatorSelected:null
        }
    }
    updateIndex= (newIndex) => {
        this.setState({selectedIndex:newIndex})
    }
    setSenatorSelection(isSenatorSelected)
    {
        this.setState({senatorSelected:isSenatorSelected})
    }
    render()
    {
        return(
            <div>
                <p className="title">Who's My Representative?</p>
                <SearchBar
                    updateSelectedIndexOnParent={(e) => this.updateIndex(e)}
                    updateSenatorSelection={(e) => this.setSenatorSelection(e)}
                    ></SearchBar>
                <div id="canidateListAndInfoDivider">
                    <CanidateList
                    updateSelectedIndexOnParent={(e) => this.updateIndex(e)}
                    selectedIndex={this.state.selectedIndex}
                    senatorSelected={this.state.senatorSelected}
                    ></CanidateList>
                    <RepOrSenatorInfo
                    firstName={canidateStore.canidatesInfo.length > 0 ? canidateStore.canidatesInfo[this.state.selectedIndex]["name"].split(" ")[0] : "First Name"}
                    lastName={canidateStore.canidatesInfo.length > 0 ? canidateStore.canidatesInfo[this.state.selectedIndex]["name"].split(" ").pop() : "Last Name"}
                    district={canidateStore.canidatesInfo.length > 0 ? canidateStore.canidatesInfo[this.state.selectedIndex]["district"] : "District"}
                    phone={canidateStore.canidatesInfo.length > 0 ? canidateStore.canidatesInfo[this.state.selectedIndex]["phone"] : "Phone"}
                    office={canidateStore.canidatesInfo.length > 0 ? canidateStore.canidatesInfo[this.state.selectedIndex]["office"] : "Office"}
                    link={canidateStore.canidatesInfo.length > 0 ? canidateStore.canidatesInfo[this.state.selectedIndex]["link"] : "Website"}
                    ></RepOrSenatorInfo>
                </div>
            </div>
            );
    }
}
export default OverallCanidateInfo