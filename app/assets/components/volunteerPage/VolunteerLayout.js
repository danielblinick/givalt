import React from 'react';

import Calendar from "./Calendar/Calendar";
import styles from "./volunteerPage.scss"

export default class VolunteerLayout extends React.Component {
	render() {
		return (
			<div class='container'>
				<div class='row'>
					<div class='col-md-8 col-md-offset-2'>
						<Calendar></Calendar>
					</div>
				</div>
			</div>
			);
	}
}