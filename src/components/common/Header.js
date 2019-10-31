import React from 'react';
import HeaderMenu from './HeaderMenu';
import SubHeader from './SubHeader';
import HeaderLogo from './HeaderLogo';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const Header = () => {
	const theme = useTheme();
	const HeaderContainer = withStyles({
		root: {
			width: '100%',
			height: '100px',
		},
	})(Container);

	return (
		<HeaderContainer component="div">
			<HeaderLogo />
			<HeaderMenu />
			<SubHeader />
		</HeaderContainer>
	);
};

export default Header;
