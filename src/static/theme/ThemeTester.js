import React, { forwardRef } from 'react';
import { useTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import PageContainer from '../../components/containers/PageContainer';

const ThemeTester = props => {
	const theme = useTheme();
	const { primary, secondary } = theme.palette;
	const paletteLoop = [primary, secondary]
	const ColorBar = makeStyles({
		root: {
			height: '100px'
		},
		label: {},
	})
	const classes = ColorBar();
	console.log('classes: ', classes, paletteLoop);


	return (
		<div className={classes.root}>
			{paletteLoop.map((c, idx) => {
				console.log('backgdColor:', c);
				return <div key={idx} style={{ backgroundColor: c.dark }}> idx, c</div>
			})}
		</div>
	);
}
export default ThemeTester;