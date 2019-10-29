import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../common/Header';
import Box from '@material-ui/core/Box';
import BreadCrumb from '../common/Breadcrumb';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';
import ActionArea from '../common/ActionArea';

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
				>
					<Header />
					<BreadCrumb />
				</Box>
			</div>
			<div>
				{' '}
				<Box component="div" display="inline" className={classes.sidebar}>
					<Sidebar />
				</Box>
				<Box component="div" display="inline" className={classes.actionarea}>
					<ActionArea />
				</Box>
			</div>
			<div>
				<Box component="div" display="block" className={classes.footer}>
					<Footer />
				</Box>
			</div>
		</div>
	);
}
