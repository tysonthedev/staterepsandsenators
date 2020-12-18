import React from 'react';
import '../css/RepOrSenatorInfo.css';
import canidateStore from '../DataStores/CanidateStore';
import PropTypes from 'prop-types';

const RepOrSenatorInfo = (props) => {
	const getSelectedRepData = () => {
		if (canidateStore.canidatesInfo.length >= props.selectedCanidateIndex - 1 && canidateStore.canidatesInfo.length > 0) {
			return {
				firstName: canidateStore.canidatesInfo[props.selectedCanidateIndex]['name'].split(' ')[0],
				lastName: canidateStore.canidatesInfo[props.selectedCanidateIndex]['name'].split(' ').pop(),
				district:
					canidateStore.canidatesInfo[props.selectedCanidateIndex]['district'] === ''
						? 'N/A'
						: canidateStore.canidatesInfo[props.selectedCanidateIndex]['district'],
				phone: canidateStore.canidatesInfo[props.selectedCanidateIndex]['phone'],
				office: canidateStore.canidatesInfo[props.selectedCanidateIndex]['office'],
				link: canidateStore.canidatesInfo[props.selectedCanidateIndex]['link'],
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
	};
	var selectedRepData = getSelectedRepData();
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
};
RepOrSenatorInfo.propTypes = {
	selectedCanidateIndex: PropTypes.number.isRequired,
};

export default RepOrSenatorInfo;
