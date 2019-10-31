import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import {
	Stepper,
	Step,
	StepLabel,
	StepContent,
	Button,
	Paper,
	Typography,
} from '@material-ui/core';

const SidebarStepper = props => {
	const theme = useTheme();

	function getSteps() {
		return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
	}

	function getStepContent(step) {
		switch (step) {
			case 0:
				return `For each ad campaign that you create, you can control how much
				you're willing to spend on clicks and conversions, which networks
				and geographical locations you want your ads to show on, and more.`;
			case 1:
				return 'An ad group contains one or more ads which target a shared set of keywords.';
			case 2:
				return `Try out different ad text to see what brings in the most customers,
						and learn how to enhance your ads using features like ad extensions.
						If you run into any problems with your ads, find out how to tell if
						they're running and how to resolve approval issues.`;
			default:
				return 'Unknown step';
		}
	}

	const SidebarStepperStyled = withStyles({
		root: {
			width: '25%',
		},
		button: {
			marginTop: theme.spacing(1),
			marginRight: theme.spacing(1),
		},
		actionsContainer: {
			marginBottom: theme.spacing(2),
		},
		resetContainer: {
			padding: theme.spacing(3),
		},
		stepContent: {
			last: '',
			root: '',
			transition: '',
		},
	})(Stepper);

	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((label, index) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
						<StepContent>
							<Typography>{getStepContent(index)}</Typography>
							<div>
								<div>
									<Button disabled={activeStep === 0} onClick={handleBack}>
										Back
									</Button>
									<Button
										variant="contained"
										color="primary"
										onClick={handleNext}
									>
										{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
									</Button>
								</div>
							</div>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0}>
					<Typography>All steps completed - you&apos;re finished</Typography>
					<Button onClick={handleReset}>Reset</Button>
				</Paper>
			)}
		</div>
	);
};
export default SidebarStepper;
