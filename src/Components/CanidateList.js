import React from 'react';
import CanidateListItem from './CanidateListItem';
import { observer } from 'mobx-react';
import canidateStore from '../DataStores/CanidateStore';
import '../css/CanidateList.css';

const theObserver = observer(
	class CanidateList extends React.Component {
		constructor() {
			super();
			this.props = {
				updateSelectedIndexOnParent: {},
				selectedIndex: 0,
				senatorSelected: null,
			};
		}
		getSelectedRepOrSenatorValue() {
			if (this.props.senatorSelected == null) {
				return '';
			} else if (this.props.senatorSelected) {
				return 'Senators';
			} else {
				return 'Representatives';
			}
		}
		canidates() {
			return canidateStore.canidatesInfo.map((canidateInfo, index) => {
				return (
					<CanidateListItem
						name={canidateInfo['name']}
						partyAffiliation={canidateInfo['party'][0]}
						index={index}
						key={index}
						selectedColor='deepskyblue'
						selected={index === this.props.selectedIndex ? true : false}
						updateSelectedIndex={
							index !== this.props.selectedIndex
								? (e) => {
										this.props.updateSelectedIndexOnParent(e);
								  }
								: {}
						}
					/>
				);
			});
		}
		render() {
			return (
				<div id='canidateListParent'>
					<div className='label' id='canidateListLabel'>
						<p>List / </p>
						<p id='selectedRepOrSenator'>{this.getSelectedRepOrSenatorValue()}</p>
					</div>
					<div id='canidateListItemLabel'>
						<CanidateListItem name='Name' partyAffiliation='Party' isStatic={true} />
					</div>
					<div id='canidateList'>{this.canidates()}</div>
				</div>
			);
		}
	}
);

export default theObserver;
