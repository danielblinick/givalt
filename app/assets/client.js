import React from 'react';
import ReactDOM from 'react-dom';

import VolunteerLayout from "./components/volunteerPage/VolunteerLayout";
import NavBar from "./components/NavBar";

const app = document.getElementById('app');

ReactDOM.render( 
	<div>
		<NavBar></NavBar>
		<VolunteerLayout></VolunteerLayout>
	</div>, 
app);
