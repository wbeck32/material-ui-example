import React from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import { Box, CardMedia } from '@material-ui/core';

const HeaderLogo = props => {
	const theme = useTheme();
	const LogoContainer = withStyles({
		root: {
			width: '50%',
			height: '300px',
		},
	})(({ classes }) => <Box className={classes.root} />);

	const LogoImage = withStyles({
		root: {
			height: '33%',
			backgroundColor: theme.palette.primary.light,
		},
	})(({ classes }) => <CardMedia className={classes.root} />);

	const Login = withStyles({
		root: {
			width: '50%',
			backgroundColor: theme.palette.secondary.main,
		},
	})(({ classes }) => <Box className={classes.root} />);

	return (
		<div>
			<LogoContainer>
				<LogoImage
					component="span"
					image="./static/css/assets/images/logo.svg"
					title="Kaiser Permanente Logo"
				></LogoImage>
				<Login>
					<span id="logout">
						David | <a href="http://example.com">Logout</a>
					</span>
				</Login>
			</LogoContainer>
		</div>
	);
};

export default HeaderLogo;
