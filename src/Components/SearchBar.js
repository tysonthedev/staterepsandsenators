import React from 'react';
import { observer } from 'mobx-react';
import canidateStore from '../DataStores/CanidateStore';
import '../css/SearchBar.css';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const stateList = [
	{ stateDisplay: 'Alabama - AL', stateAbr: 'AL' },
	{ stateDisplay: 'Alaska - AK', stateAbr: 'AK' },
	{ stateDisplay: 'Arizona - AZ', stateAbr: 'AZ' },
	{ stateDisplay: 'Arkansas - AR', stateAbr: 'AR' },
	{ stateDisplay: 'California - CA', stateAbr: 'CA' },
	{ stateDisplay: 'Colorado - CO', stateAbr: 'CO' },
	{ stateDisplay: 'Connecticut - CT', stateAbr: 'CT' },
	{ stateDisplay: 'Delaware - DE', stateAbr: 'DE' },
	{ stateDisplay: 'Florida - FL', stateAbr: 'FL' },
	{ stateDisplay: 'Georgia - GA', stateAbr: 'GA' },
	{ stateDisplay: 'Hawaii - HI', stateAbr: 'HI' },
	{ stateDisplay: 'Idaho - ID', stateAbr: 'ID' },
	{ stateDisplay: 'Illinois - IL', stateAbr: 'IL' },
	{ stateDisplay: 'Indiana - IN', stateAbr: 'IN' },
	{ stateDisplay: 'Iowa - IA', stateAbr: 'IA' },
	{ stateDisplay: 'Kansas - KS', stateAbr: 'KS' },
	{ stateDisplay: 'Kentucky - KY', stateAbr: 'KY' },
	{ stateDisplay: 'Louisiana - LA', stateAbr: 'LA' },
	{ stateDisplay: 'Maine - ME', stateAbr: 'ME' },
	{ stateDisplay: 'Maryland - MD', stateAbr: 'MD' },
	{ stateDisplay: 'Massachusetts - MA', stateAbr: 'MA' },
	{ stateDisplay: 'Michigan - MI', stateAbr: 'MI' },
	{ stateDisplay: 'Minnesota - MN', stateAbr: 'MN' },
	{ stateDisplay: 'Mississippi - MS', stateAbr: 'MS' },
	{ stateDisplay: 'Missouri - MO', stateAbr: 'MO' },
	{ stateDisplay: 'Montana - MT', stateAbr: 'MT' },
	{ stateDisplay: 'Nebraska - NE', stateAbr: 'NE' },
	{ stateDisplay: 'Nevada - NV', stateAbr: 'NV' },
	{ stateDisplay: 'New Hampshire - NH', stateAbr: 'NH' },
	{ stateDisplay: 'New Jersey - NJ', stateAbr: 'NJ' },
	{ stateDisplay: 'New Mexico - NM', stateAbr: 'NM' },
	{ stateDisplay: 'New York - NY', stateAbr: 'NY' },
	{ stateDisplay: 'North Carolina - NC', stateAbr: 'NC' },
	{ stateDisplay: 'North Dakota - ND', stateAbr: 'ND' },
	{ stateDisplay: 'Ohio - OH', stateAbr: 'OH' },
	{ stateDisplay: 'Oklahoma - OK', stateAbr: 'OK' },
	{ stateDisplay: 'Oregon - OR', stateAbr: 'OR' },
	{ stateDisplay: 'Pennsylvania - PA', stateAbr: 'PA' },
	{ stateDisplay: 'Rhode Island - RI', stateAbr: 'RI' },
	{ stateDisplay: 'South Carolina - SC', stateAbr: 'SC' },
	{ stateDisplay: 'South Dakota - SD', stateAbr: 'SD' },
	{ stateDisplay: 'Tennessee - TN', stateAbr: 'TN' },
	{ stateDisplay: 'Texas - TX', stateAbr: 'TX' },
	{ stateDisplay: 'Utah - UT', stateAbr: 'UT' },
	{ stateDisplay: 'Vermont - VT', stateAbr: 'VT' },
	{ stateDisplay: 'Virginia - VA', stateAbr: 'VA' },
	{ stateDisplay: 'Washington - WA', stateAbr: 'WA' },
	{ stateDisplay: 'West Virginia - WV', stateAbr: 'WV' },
	{ stateDisplay: 'Wisconsin - WI', stateAbr: 'WI' },
	{ stateDisplay: 'Wyoming - WY', stateAbr: 'WY' },
];

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedStateAbr: '',
			senatorSelected: null,
		};
	}
	async setSenatorSelected(stringSelection) {
		if (stringSelection === 'Senator') {
			this.setState({ senatorSelected: true });
			await this.getResults(true, this.state.selectedStateAbr);
		} else if (stringSelection === 'Representative') {
			this.setState({ senatorSelected: false });
			await this.getResults(false, this.state.selectedStateAbr);
		} else {
			this.setState({ senatorSelected: null });
			await this.getResults(null, this.state.selectedStateAbr);
		}
	}
	async setStateAbr(stringAbr) {
		if (stringAbr == null) {
			this.setState({ selectedStateAbr: null });
			await this.getResults(this.state.senatorSelected, '');
		} else if ('stateAbr' in stringAbr) {
			this.setState({ selectedStateAbr: stringAbr['stateAbr'] });
			await this.getResults(this.state.senatorSelected, stringAbr['stateAbr']);
		}
	}
	async getResults(isSenator, stateAbr) {
		if (await canidateStore.updateCanidates(isSenator, stateAbr)) {
			this.props.updateSelectedIndexOnParent(0);
			this.props.updateSenatorSelection(isSenator);
		}
	}
	render() {
		return (
			<div id='repAndSenatorFilters'>
				<Autocomplete
					className='filterDropdownList'
					autoSelect
					onChange={(e, newValue) => this.setSenatorSelected(newValue)}
					options={['Representative', 'Senator']}
					renderInput={(params) => <TextField {...params} label='Senator Or Representative?' variant='outlined' />}
				/>
				<Autocomplete
					className='filterDropdownList'
					autoSelect
					onChange={(e, newValue) => this.setStateAbr(newValue)}
					options={stateList}
					getOptionLabel={(option) => option.stateDisplay}
					renderInput={(params) => <TextField {...params} label='Which State?' variant='outlined' />}
				/>
			</div>
		);
	}
}

SearchBar.propTypes = {
	updateSelectedIndexOnParent: PropTypes.func.isRequired,
	updateSenatorSelection: PropTypes.func.isRequired,
};

export default new observer(SearchBar);
