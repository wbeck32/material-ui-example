import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    "root": {
        "width": "90%"
    },
    "button": {
    "marginTop": theme.spacing(1),
        "marginRight": theme.spacing(1)
},
    "actionsContainer": {
        "marginBottom": theme.spacing(2)
},
    "resetContainer": {
    "padding": theme.spacing(3)
    }
}));

function getStepContent (step) {

    switch (step) {

case 0:
        return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
case 1:
    return "An ad group contains one or more ads which target a shared set of keywords.";
case 2:
        return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
default:
        return "Unknown step";

    }

}

const SidebarStepperMenu = (props) => {

    const {
            steps,
            stepperControlProps,
            buttonControlProps,
            paperProps,
            typographyProps
        } = props,

        classes = useStyles(),
    [
            activeStep,
            setActiveStep
        ] = useState(0);

    console.log("dsdd");
    const handleNext = () => {

            setActiveStep((prevActiveStep) => prevActiveStep + 1);

        },

        handleBack = () => {

            setActiveStep((prevActiveStep) => prevActiveStep - 1);

},

        handleReset = () => {

    setActiveStep(0);

        };

    return (
        <div className={classes.root}>
            <Stepper
                {...stepperControlProps}
                activeStep={activeStep}
                orientation="vertical"
            >
                {steps.map((label, index) => <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography {...typographyProps}>
                                {getStepContent(index)}
                            </Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        {...buttonControlProps}
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
										Back
                                    </Button>
                                    <Button
                                        {...buttonControlProps}
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>)}
            </Stepper>
            {activeStep === steps.length &&
				<Paper
				    {...paperProps}
				    square
				    elevation={0}
				    className={classes.resetContainer}
				>
				    <Typography {...typographyProps}>
						All steps completed - you&apos;re finished
				    </Typography>
				    <Button
				        {...buttonControlProps}
				        onClick={handleReset}
				        className={classes.button}
				    >
						Reset
				    </Button>
				</Paper>
            }
        </div>
    );

};

SidebarStepperMenu.propTypes = {
    "steps": PropTypes.array,
    "stepperControlProps": PropTypes.object,
    "buttonControlProps": PropTypes.object,
    "paperProps": PropTypes.object,
    "typographyProps": PropTypes.object
};

export default SidebarStepperMenu;
