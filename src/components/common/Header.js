import React from 'react';
import HeaderMenu from './HeaderMenu';
import SubHeader from './SubHeader';
import HeaderLogo from './HeaderLogo';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const Header = () => {
	const HeaderContainer = withStyles({
		root: {
			width: '100%',
		},
		label: {},
	})(({ classes }) => (
		<div>
			<HeaderLogo />
			<HeaderMenu />
			<SubHeader />
		</div>
	));

	return (
		<div>
			<HeaderContainer />
		</div>
	);
};

export default Header;
