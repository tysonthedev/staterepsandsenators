import React from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import './css/App.css';
import OverallCanidateInfo from './Components/OverallCanidateInfo';
import { SnackbarProvider } from 'notistack';

function App() {
	return (
		<SnackbarProvider maxSnack={3}>
			<div className='App'>
				<OverallCanidateInfo></OverallCanidateInfo>
			</div>
		</SnackbarProvider>
	);
}

export default App;
