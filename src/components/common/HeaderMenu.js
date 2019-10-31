import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Container, Button, Typography } from '@material-ui/core';

const HeaderMenu = () => {
	const theme = useTheme();
	const HeaderMenuItem = withStyles({
		root: {
			backgroundColor: theme.palette.primary.dark,
			color: theme.palette.common.white,
			padding: '25px 20px 25px 20px',
			textTransform: 'none',
			fontFamily: theme.typography.h3.fontFamily,
			'&:hover': {
				borderBottom: '1px solid red',
				marginBottom: '5px',
			},
		},
	})(Button);

	const HeaderMenuContainer = withStyles({
		root: {
			width: '100%',
			backgroundColor: theme.palette.primary.dark,
			color: theme.palette.common.white,
			margin: 0,
			fontFamily: theme.typography.h3.fontFamily,
		},
	})(Container);

	const handleClick = e => {
		console.log('e: ', e.target);
	};

	return (
		<Typography variant="h3">
			<HeaderMenuContainer fixed>
				<HeaderMenuItem component="h3" onClick={handleClick}>
					Home
				</HeaderMenuItem>
				<HeaderMenuItem component="h3" onClick={handleClick}>
					New request
				</HeaderMenuItem>
				<HeaderMenuItem component="h3" onClick={handleClick}>
					Customers
				</HeaderMenuItem>
				<HeaderMenuItem component="h3" onClick={handleClick}>
					Contacts
				</HeaderMenuItem>
				<HeaderMenuItem component="h3" onClick={handleClick}>
					Configure
				</HeaderMenuItem>
			</HeaderMenuContainer>
		</Typography>
	);
};

export default HeaderMenu;
