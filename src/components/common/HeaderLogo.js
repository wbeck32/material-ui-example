import React from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import { Box, CardMedia, Container } from '@material-ui/core';

const HeaderLogo = props => {
	const theme = useTheme();
	const LogoContainer = withStyles({
		root: {
			width: '100%',
			height: '100px',
			backgroundColor: theme.palette.common.white,
		},
	})(Container);

	const LogoImage = withStyles({
		root: {
			width: '50%',
		},
	})(CardMedia);

	const Login = withStyles({
		root: {
			width: '50%',
		},
	})(Container);

	return (
		<LogoContainer maxWidth={false} fixed={true}>
			<LogoImage
				height="25"
				component="img"
				image="./static/css/assets/images/logo.svg"
				title="Kaiser Permanente Logo"
			></LogoImage>
			<Login maxWidth={false} fixed={true} component="span">
				David | <a href="http://example.com">Logout</a>
			</Login>
		</LogoContainer>
	);
};

export default HeaderLogo;
