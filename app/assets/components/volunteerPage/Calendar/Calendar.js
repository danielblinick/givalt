import React, { PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import styles from './react-big-calendar.css'
import calendarStyles from './calendar.scss'

BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component {
	render() {
		const myEventsList = [];
		return (
			<div class='calendar-container'>
				<BigCalendar
				{...this.props}
				events={myEventsList}
		      	defaultDate={new Date(2016, 1, 1)}
		      	timeslots={4}
				/>
			</div>
			);
	}
}