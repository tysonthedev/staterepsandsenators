import React from 'react';
import '../css/CanidateListItem.css';

class CanidateListItem extends React.Component {
	constructor() {
		super();
		this.props = {
			name: 'Name',
			partyAffiliation: 'Party Affiliation',
			index: 0,
			selected: false,
			selectedColor: '',
			updateSelectedIndex: null,
			isStatic: false,
		};
	}
	onSelect() {
		if (!this.props.isStatic && !this.props.selected) {
			this.props.updateSelectedIndex(this.props.index);
		}
	}
	getStyle() {
		if (!this.props.isStatic && this.props.selected) {
			return { backgroundColor: this.props.selectedColor };
		} else {
			return {};
		}
	}
	render() {
		return (
			<div onClick={() => this.onSelect()} style={this.getStyle()} className='canidateListItem'>
				<p>{this.props.name}</p>
				<p>{this.props.partyAffiliation}</p>
			</div>
		);
	}
}

export default CanidateListItem;
