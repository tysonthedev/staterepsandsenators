import React from 'react';
import CanidateListItem from './CanidateListItem';
import { observer } from 'mobx-react';
import canidateStore from '../DataStores/CanidateStore';
import '../css/CanidateList.css';
import PropTypes from 'prop-types';

const CanidateList = (props) => {
	const getSelectedRepOrSenatorValue = () => {
		if (props.senatorSelected == null) {
			return '';
		} else if (props.senatorSelected) {
			return 'Senators';
		} else {
			return 'Representatives';
		}
	};
	const canidates = () => {
		if (canidateStore.canidatesInfo == null) return;
		return canidateStore.canidatesInfo.map((canidateInfo, index) => {
			return (
				<CanidateListItem
					name={canidateInfo['name']}
					partyAffiliation={canidateInfo['party'][0]}
					index={index}
					key={index}
					selectedColor='deepskyblue'
					selected={index === props.selectedIndex ? true : false}
					updateSelectedIndex={
						index !== props.selectedIndex
							? (e) => {
									props.updateSelectedIndexOnParent(e);
							  }
							: () => {}
					}
				/>
			);
		});
	};
	return (
		<div id='canidateListParent'>
			<div className='label' id='canidateListLabel'>
				<p>List / </p>
				<p id='selectedRepOrSenator'>{getSelectedRepOrSenatorValue()}</p>
			</div>
			<div id='canidateListItemLabel'>
				<CanidateListItem name='Name' partyAffiliation='Party' isStatic={true} />
			</div>
			<div id='canidateList'>{canidates()}</div>
		</div>
	);
};
CanidateList.propTypes = {
	updateSelectedIndexOnParent: PropTypes.func,
	selectedIndex: PropTypes.number,
};
CanidateList.defaultProps = {
	updateSelectedIndexOnParent: {},
	senatorSelected: null,
};
export default new observer(CanidateList);
