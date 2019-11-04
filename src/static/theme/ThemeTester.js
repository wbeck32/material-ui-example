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

	// <div className={classes.colorStripe} key={`${idx}+${c.light}`} style={{ backgroundColor: c.light }}> {i}{index}</div>

	return (
		<div className={classes.root}>
			{paletteLoop.map((c, idx) => {
				let valArr = Object.entries(c)
				return (valArr.map(i => {
					console.log('i, index: ', i)
					return (
						<div className={classes.colorBlock}>hello</div>
					)
				})
				)
			})}
		</div>
	)
}
export default ThemeTester;