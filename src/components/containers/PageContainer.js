import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../common/Header';
import BreadCrumb from '../common/Breadcrumb';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';
import ActionArea from '../common/ActionArea';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		border: '2px solid red',
	},
	header: {},
	breadcrumb: {},
	sidebar: {
		width: '25%',
		border: theme.palette.error.main,
	},
	actionarea: {
		width: '75%',
		border: '2px solid blue',
	},
	footer: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));
class PageContainer extends Component {
	render() {
		console.log(this);
		// const { theme } = props;
		// console.log('theme: ', theme);
		return <div>container</div>;
	}
}

export default PageContainer;

// <div className={classes.root}>
// 	<div>
// 		<Grid container component="div">
// 			<Grid item>
// 				<Header className={classes.header} />
// 			</Grid>
// 			<Grid item>
// 				<BreadCrumb className={classes.breadcrumb} />
// 			</Grid>
// 		</Grid>
// 	</div>
// 	<div>
// 		<Grid container>
// 			<Grid item>
// 				<Sidebar className={classes.sidebar} />
// 			</Grid>
// 			<Grid item>
// 				<ActionArea className={classes.actionarea} />
// 			</Grid>
// 		</Grid>
// 	</div>
// 	<div>
// 		<Grid container>
// 			<Grid item>
// 				<Footer className={classes.footer} />
// 			</Grid>
// 		</Grid>
// 	</div>
// </div>
