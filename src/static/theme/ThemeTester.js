import React, { forwardRef } from 'react';
import { useTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import PageContainer from '../../components/containers/PageContainer';

const ThemeTester = props => {
	const theme = useTheme();
	const { primary, secondary, action } = theme.palette;
	const paletteLoop = [{ primary }, { secondary }, { action }]
	const ColorBar = makeStyles({
		root: {
			minHeight: '100px'
		},
		label: {},
		colorBlock: {
			margin: '20px 0'
		},
		colorStripe: {
			height: '30px',
			margin: '10px 0',
			color: theme.palette.common.white
		}
	})
	const classes = ColorBar();


	return (
		<div className={classes.root}>
			{paletteLoop.map((c, idx) => {
				const valArray = Object.entries(c);
				return valArray.map((m, idx) => {
					const category = m[0];
					console.log('category: ', category);
					const colors = m[1];
					console.log('colors: ', colors);
					return (<div key={idx} className={classes.colorBlock}>
						{c.colorBlock} {idx}
					</div>)
				})
			}
			)}

		</div>
	)
}
export default ThemeTester;