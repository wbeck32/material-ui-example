import React from 'react';

const Logo = props => {
	return (
		<div className="logoStyle">
			<span className="image" id="logo">
				<img
					src="./static/css/assets/images/KPLogoIconBlue.svg"
					alt="Kaiser Permanente logo"
				/>
			</span>
			<span id="logout">
				David | <a href="http://example.com">Logout</a>
			</span>
		</div>
	);
};

export default logo;
