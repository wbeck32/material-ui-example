import React, { forwardRef } from 'react';
import { useTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


const ThemeTester = () => {
	const theme = useTheme();
	const { primary, secondary } = theme.palette;
	const paletteLoop = [primary.dark, primary.light, primary.main, secondary.main];

	const ThemeContainer = withStyles({
		root: {
			width: '100%',
		},
	})(({ classes }) => (
		<div>{classes.root}</div>
	))
	return (<ThemeContainer>jkjk</ThemeContainer>)

}

export default ThemeTester;