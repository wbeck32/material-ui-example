import React from 'react';
import Breadcrumb from './Breadcrumb';

const Header = props => {
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
	const Menu = props => {
		return (
			<div>
				<div className="styling-6 -book menuStyle">
					<span className="header-menu-link inlineList">
						<a href="https://example.com">Request</a>
					</span>
					<span className="header-menu-link inlineList">
						<a href="https://example.com">Customers</a>
					</span>
					<span className="header-menu-link inlineList">
						<a href="https://example.com">Contacts</a>
					</span>
					<span className="header-menu-link inlineList">
						<a href="https://example.com">Configure</a>
					</span>
				</div>
			</div>
		);
	};

	return (
		<div className="columns-12">
			<Logo />
			<Menu />
			<Breadcrumb />
		</div>
	);
};

export default Header;
