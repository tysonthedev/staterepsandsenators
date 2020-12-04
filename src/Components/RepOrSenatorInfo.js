import React from 'react';
import '../css/RepOrSenatorInfo.css';
import canidateStore from '../DataStores/CanidateStore';

class RepOrSenatorInfo extends React.Component {
	constructor() {
		super();
		this.props = {
			selectedCanidateIndex: 0,
		};
	}
	getSelectedRepData() {
		if (canidateStore.canidatesInfo.length >= this.props.selectedCanidateIndex - 1 && canidateStore.canidatesInfo.length > 0) {
			return {
				firstName: canidateStore.canidatesInfo[this.props.selectedCanidateIndex]['name'].split(' ')[0],
				lastName: canidateStore.canidatesInfo[this.props.selectedCanidateIndex]['name'].split(' ').pop(),
				district:
					canidateStore.canidatesInfo[this.props.selectedCanidateIndex]['district'] === ''
						? 'N/A'
						: canidateStore.canidatesInfo[this.props.selectedCanidateIndex]['district'],
				phone: canidateStore.canidatesInfo[this.props.selectedCanidateIndex]['phone'],
				office: canidateStore.canidatesInfo[this.props.selectedCanidateIndex]['office'],
				link: canidateStore.canidatesInfo[this.props.selectedCanidateIndex]['link'],
			};
		} else {
			return {
				firstName: 'First Name',
				lastName: 'Last Name',
				district: 'District',
				phone: 'Phone Number',
				office: 'Office',
				link: 'Website',
			};
		}
	}
	render() {
		var selectedRepData = this.getSelectedRepData();
		return (
			<div id='repOrSenatorInfoParent'>
				<p className='label'>Info</p>
				<div id='repOrSenatorInfo'>
					<p className='infoText'>{selectedRepData['firstName']}</p>
					<p className='infoText'>{selectedRepData['lastName']}</p>
					<p className='infoText'>{selectedRepData['district']}</p>
					<p className='infoText'>{selectedRepData['phone']}</p>
					<p className='infoText'>{selectedRepData['office']}</p>
					<a className='infoText' rel='noreferrer' target='_blank' href={selectedRepData['link']}>
						{selectedRepData['link']}
					</a>
				</div>
			</div>
		);
	}
}

export default RepOrSenatorInfo;
