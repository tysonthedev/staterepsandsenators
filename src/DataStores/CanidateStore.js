import { action, makeObservable, observable } from 'mobx';

class CanidateStore {
	canidatesInfo = [];
	constructor() {
		makeObservable(this, {
			canidatesInfo: observable,
			updateCanidates: action,
		});
	}

	async updateCanidates(senatorSelected, selectedStateAbr) {
		if (senatorSelected == null || selectedStateAbr === '' || selectedStateAbr == null) {
			if (senatorSelected == null) {
				alert('you must select either senator or representative.');
			}
			if (selectedStateAbr == null || selectedStateAbr === '') {
				alert('you must select a state.');
			}
			return;
		} else if (senatorSelected) {
			try {
				this.canidatesInfo = (await (await fetch('http://localhost:4000/senators/' + selectedStateAbr)).json())['results'];
				return true;
			} catch (error) {
				alert(error);
			}
		} else {
			try {
				this.canidatesInfo = (await (await fetch('http://localhost:4000/representatives/' + selectedStateAbr)).json())['results'];
				return true;
			} catch (error) {
				alert(error);
			}
		}
		return false;
	}
}

const observableCanidateStore = new CanidateStore();

export default observableCanidateStore;
