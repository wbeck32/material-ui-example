import React from 'react';

const Breadcrumb = props => {
	return (
		<nav
			aria-label="Breadcrumbs"
			className="breadcrumb"
			data-analytics-location="Breadcrumbs"
		>
			<ul>
				<li>
					<a href="#">
						Request
						<i aria-hidden="true" className="icon-chevron-forward"></i>
					</a>
				</li>
				<li>
					<div>
						<i aria-hidden="true" className="device-only icon-chevron-back"></i>
						Request details flow
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default Breadcrumb;
