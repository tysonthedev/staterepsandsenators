import React from 'react';
import SearchBar from './SearchBar';
import CanidateList from './CanidateList';
import RepOrSenatorInfo from './RepOrSenatorInfo';
import '../css/OverallCanidateInfo.css';

class OverallCanidateInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			senatorSelected: null,
			selectedIndex: 0,
		};
	}
	updateIndex = (newIndex) => {
		this.setState({ selectedIndex: newIndex });
	};
	setSenatorSelection(isSenatorSelected) {
		this.setState({ senatorSelected: isSenatorSelected });
	}
	render() {
		return (
			<div>
				<p className='title'>Who's My Representative?</p>
				<SearchBar updateSelectedIndexOnParent={(e) => this.updateIndex(e)} updateSenatorSelection={(e) => this.setSenatorSelection(e)} />
				<div id='canidateListAndInfoDivider'>
					<CanidateList
						updateSelectedIndexOnParent={(e) => this.updateIndex(e)}
						selectedIndex={this.state.selectedIndex}
						senatorSelected={this.state.senatorSelected}
					/>
					<RepOrSenatorInfo selectedCanidateIndex={this.state.selectedIndex} />
				</div>
			</div>
		);
	}
}
export default OverallCanidateInfo;
