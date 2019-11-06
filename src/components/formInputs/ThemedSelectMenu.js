import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	InputLabel,
	Input,
	MenuItem,
	FormControl,
	Select,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	container: {},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

const ThemedSelectMenu = props => {
	const {
		formControlProps,
		inputControlLabel,
		defaultText,
		selectControlProps,
		menuChoices,
	} = props;

	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [choice, setChoice] = useState('');

	const handleChange = event => {
		setChoice(event.target.value || '');
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<form className={classes.container}>
			<div>
				<FormControl {...formControlProps} className={classes.formControl}>
					<InputLabel {...inputControlLabel} htmlFor={inputControlLabel}>
						{defaultText}
					</InputLabel>
					<Select
						{...selectControlProps}
						value={choice}
						onChange={handleChange}
						input={<Input id={inputControlLabel} />}
					>
						{menuChoices !== undefined &&
							menuChoices.map(o => {
								return (
									<MenuItem key={o.value} value={o.value}>
										{o.label}
									</MenuItem>
								);
							})}
					</Select>
				</FormControl>
			</div>
		</form>
	);
};

ThemedSelectMenu.propTypes = {
	formControlProps: PropTypes.object,
	inputControlLabel: PropTypes.string,
	selectControlProps: PropTypes.object,
	defaultText: PropTypes.string,
	menuChoices: PropTypes.arrayOf(
		PropTypes.objectOf({ value: PropTypes.string, label: PropTypes.string })
	),
};

export default ThemedSelectMenu;
