import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';
import SelectMenu from '../formInputs/ThemedSelectMenu';

const FormModal = () => {
	const theme = useTheme();
	const useStyles = makeStyles({
		root: { flexGrow: 1, width: '100%' },
		modal: {
			width: '83%',
		},
		applyButton: {
			margin: '',
			backGroundColor: theme.palette.primary.main,
		},
		cancelButton: {
			backgroundColor: theme.palette.common.white,
		},
	});
	const [open, setOpen] = React.useState(false);
	const classes = useStyles();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Open form dialog
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<Grid container>
					<Grid item className={classes.modal}>
						<Typography variant="h1">
							<DialogTitle id="form-dialog-title">Filter requests</DialogTitle>
						</Typography>
						<DialogContent>
							<SelectMenu></SelectMenu>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} color="primary">
								Cancel
							</Button>
							<Button onClick={handleClose} className={classes.applyButton}>
								Apply
							</Button>
						</DialogActions>
					</Grid>
				</Grid>
			</Dialog>
		</div>
	);
};

export default FormModal;
