import React from 'react';
import '../css/CanidateListItem.css';
import PropTypes from 'prop-types';

const CanidateListItem = (props) => {
	const onSelect = () => {
		if (!props.isStatic && !props.selected) {
			props.updateSelectedIndex(props.index);
		}
	};
	const getStyle = () => {
		if (!props.isStatic && props.selected) {
			return { backgroundColor: props.selectedColor };
		} else {
			return {};
		}
	};
	return (
		<div onClick={() => onSelect()} style={getStyle()} className='canidateListItem'>
			<p>{props.name}</p>
			<p>{props.partyAffiliation}</p>
		</div>
	);
};
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
