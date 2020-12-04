import React from 'react';
import { observer } from 'mobx-react';
import canidateStore from '../DataStores/CanidateStore';
import { DropdownList } from 'react-widgets';
import { Button } from 'react-bootstrap';
import '../css/SearchBar.css';

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

const theObserver = new observer(
	class SearchBar extends React.Component {
		constructor() {
			super();
			this.props = {
				updateSelectedIndexOnParent: {},
				updateSenatorSelection: {},
			};
			this.state = {
				selectedStateAbr: '',
				senatorSelected: false,
			};
		}
		setSenatorSelected(stringSelection) {
			if (stringSelection === 'Senator') {
				this.setState({ senatorSelected: true });
			} else {
				this.setState({ senatorSelected: false });
			}
		}
		setStateAbr(stringAbr) {
			this.setState({ selectedStateAbr: stringAbr });
		}
		async getResults() {
			await canidateStore.updateCanidates(this.state.senatorSelected, this.state.selectedStateAbr);
			this.props.updateSelectedIndexOnParent(0);
			this.props.updateSenatorSelection(this.state.senatorSelected);
		}
		render() {
			return (
				<div id='repAndSenatorFilters'>
					<DropdownList
						className='filterDropdownList'
						data={['Representative', 'Senator']}
						defaultValue='Representative or Senator?'
						onChange={(e) => this.setSenatorSelected(e)}
					/>
					<DropdownList
						className='filterDropdownList'
						data={stateList}
						valueField='stateAbr'
						textField='stateDisplay'
						defaultValue='Which State?'
						onChange={(e) => this.setStateAbr(e['stateAbr'])}
						filter='contains'
					/>
					<Button
						className='getResultsButton'
						variant='primary'
						size='lg'
						onClick={async () => {
							await this.getResults();
						}}
					>
						GO
					</Button>
				</div>
			);
		}
	}
);
export default theObserver;
