import React from 'react';
import '../css/CanidateListItem.css';
import PropTypes, { func } from 'prop-types';

class CanidateListItem extends React.Component {
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
CanidateListItem.propTypes = {
	name: PropTypes.string,
	partyAffiliation: PropTypes.string,
	index: PropTypes.number,
	selected: PropTypes.bool,
	selectedColor: PropTypes.string,
	updateSelectedIndex: PropTypes.func,
	isStatic: PropTypes.bool,
};
CanidateListItem.defaultProps = {
	name: 'Name',
	partyAffiliation: 'Party Affilation',
	updateSelectedIndex: () => {},
};

export default CanidateListItem;
