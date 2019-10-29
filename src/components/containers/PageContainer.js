import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		border: '2px solid red',
	},
	header: {},
	sidebar: {
		width: '25%',
	},
	actionarea: {
		width: '75%',
	},
	footer: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function PageContainer() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div>
				<Box
					component="div"
					display="block"
					className={(classes.header, classes.root)}
				/>
			</div>
			<div>
				{' '}
				<Box component="div" display="inline" className={classes.sidebar} />
				<Box component="div" display="inline" className={classes.actionarea} />
			</div>
			<div>
				<Box component="div" display="block" className={classes.footer} />
			</div>
		</div>
	);
}
