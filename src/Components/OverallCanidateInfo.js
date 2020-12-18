import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CanidateList from './CanidateList';
import RepOrSenatorInfo from './RepOrSenatorInfo';
import '../css/OverallCanidateInfo.css';

const OverallCanidateInfo = (props) => {
	const [senatorSelected, setSenatorSelected] = useState(null);
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<div>
			<p className='title'>Who's My Representative?</p>
			<SearchBar updateSelectedIndexOnParent={(e) => setSelectedIndex(e)} updateSenatorSelection={(e) => setSenatorSelected(e)} />
			<div id='canidateListAndInfoDivider'>
				<CanidateList
					updateSelectedIndexOnParent={(e) => setSelectedIndex(e)}
					selectedIndex={selectedIndex}
					senatorSelected={senatorSelected}
				/>
				<RepOrSenatorInfo selectedCanidateIndex={selectedIndex} />
			</div>
		</div>
	);
};
export default OverallCanidateInfo;
