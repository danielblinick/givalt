import React from 'react'

export default class Map extends React.Component {
	render() {
		return (
			<div>
				<iframe
				  width="600"
				  height="450"
				  frameborder="0"
				  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCXWsVOKygN6fbBeKpWEVsvXQAo41NGYK0
				    &q=Space+Needle,Seattle+WA" allowfullscreen>
				</iframe>
			</div>
			);
	}
}