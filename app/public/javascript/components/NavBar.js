import React from 'react';

export default class NavBar extends React.Component {
	render() {
	const Articles = [
      "Volunteer",
      "Non-Profit",
      "About Us",
    ].map((title, i) => <li role="presentation" key={i}><a>{title}</a></li> );
		return (
			<ul class="nav nav-tabs">
				{Articles}
			</ul>
			);
	}
}