import { action, makeObservable, observable } from 'mobx';
import axios from 'axios';

class CanidateStore {
	canidatesInfo = [];
	constructor() {
		makeObservable(this, {
			canidatesInfo: observable,
			updateCanidates: action,
			updateCanidatesInfo: action,
		});
	}

	updateCanidatesInfo(newCanidates) {
		this.canidatesInfo = newCanidates;
	}

	async updateCanidates(senatorSelected, selectedStateAbr) {
		var errors = { flags: [], messages: [] };
		if (senatorSelected == null || selectedStateAbr === '' || selectedStateAbr == null) {
			if (senatorSelected == null) {
				errors['flags'].push('senatorSelection');
				errors['messages'].push('You must select either senator or representative');
			}
			if (selectedStateAbr == null || selectedStateAbr === '') {
				errors['flags'].push('stateSelection');
				errors['messages'].push('You must select a state');
			}
			return errors;
		} else if (senatorSelected) {
			try {
				this.updateCanidatesInfo(await (await axios.get('http://localhost:4000/senators/' + selectedStateAbr)).data['results']);
				return true;
			} catch (error) {
				errors['messages'].push('api errors(senators):' + error);
			}
		} else {
			try {
				this.updateCanidatesInfo(await (await axios.get('http://localhost:4000/representatives/' + selectedStateAbr)).data['results']);
				return true;
			} catch (error) {
				errors['messages'].push('api error(representatives):' + error);
			}
		}
		return errors;
	}
}

const observableCanidateStore = new CanidateStore();

export default observableCanidateStore;
