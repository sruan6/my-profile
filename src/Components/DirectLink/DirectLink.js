import React, { Component } from 'react';
import './DirectLink.css';
import github from '../../assets/github_icon.svg';
import linkedin from '../../assets/linkedin_icon.png';

const DirectLink = () => 
	<div className='icon'>
		<div className='github'>
			<a href='https://github.com/ruan060606' target='_blank'><img src={github} /></a>
			<a href='https://github.com/ruan060606' target='_blank'><img src={linkedin} /></a>
		</div>
	</div>

export default DirectLink;