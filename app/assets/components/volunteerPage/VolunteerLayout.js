import React from 'react';

import Calendar from "./Calendar/Calendar";
import styles from "./volunteerPage.scss"

export default class VolunteerLayout extends React.Component {
	render() {
		return (
			<div id='container'>
				<Calendar></Calendar>
			</div>
			);
	}
}