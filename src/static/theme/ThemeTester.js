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
		}
	})

	const classes = ColorBar();
	return (
		<div className={classes.root}>
			{paletteLoop.map((c, idx) => {
				const category = Object.keys(c)[0];
				const colors = Object.entries(Object.entries(c)[0][1])
				return (
					<div key={Date.now() / 1000000} className={classes.colorBlock}>
						colors.map(c => {
							<div key={Date.now() / 1000000} className={classes.colorStripe}>{category}{Date.now() / 1000000}{c}</div>
						})
					</div>)
			})}

		</div>)
}
export default ThemeTester;