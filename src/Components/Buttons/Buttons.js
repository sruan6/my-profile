import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
	render() {
		return (
			<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
			  <div className="btn-group mr-2" role="group" aria-label="First group">
			    <button type="button" className="btn btn-secondary">1</button>
			    <button type="button" className="btn btn-secondary">2</button>
			    <button type="button" className="btn btn-secondary">3</button>
			    <button type="button" className="btn btn-secondary">4</button>
			  </div>
			  <div className="btn-group mr-2" role="group" aria-label="Second group">
			    <button type="button" className="btn btn-secondary">5</button>
			    <button type="button" className="btn btn-secondary">6</button>
			    <button type="button" className="btn btn-secondary">7</button>
			  </div>
			  <div className="btn-group" role="group" aria-label="Third group">
			    <button type="button" className="btn btn-secondary">8</button>
			    <button type="button" className="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>

			  </div>
			</div>
			)
	}
}

export default Buttons;