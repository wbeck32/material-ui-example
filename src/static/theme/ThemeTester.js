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
		colors: {
			primary: {
				backgroundColor: primary.dark
			},
			secondary: {
				backgroundColor: secondary.dark
			}
		}
	})
	const classes = ColorBar();
	console.log('classes: ', classes, paletteLoop);


	return (
		<div className={classes.root}>
			{paletteLoop.map((backgroundColor, idx) => {
				return <div key={idx} className={classes.root}>idx, backgroundColor</div>
			})}
		</div>
	);
};
export default ThemeTester;