import React, { forwardRef } from 'react';
import { useTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import PageContainer from '../../components/containers/PageContainer';

const ThemeTester = props => {
	const theme = useTheme();
	const { primary, secondary, common } = theme.palette;
	const paletteLoop = [primary.main, secondary.main, common.white];
	let tmp = '';
	// TODO: make a list item component this is not working
	return (
		<div>
			reltkel;trk		</div>
	);
};
export default ThemeTester;