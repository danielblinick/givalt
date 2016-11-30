import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import styles from './react-big-calendar.css'

BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component {
	render() {
		const myEventsList = [];
		return (
			<div>
				<BigCalendar
				events={myEventsList}
		      	startAccessor='startDate'
		      	endAccessor='endDate'
				/>
			</div>
			);
	}
}