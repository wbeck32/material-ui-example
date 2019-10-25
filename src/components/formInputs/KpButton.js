import React from 'react';
import {
	createMuiTheme,
	makeStyles,
	ThemeProvider,
} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		border: '5px solid red',
	},
}));

const classes = useStyles();
const myButton = React.forwardRef((props, ref) => (
	<button ref={ref} className={classes.root}></button>
));

const ref = React.createRef();
<myButton ref={ref}>Click?</myButton>;

// const theme = createMuiTheme({
// 	status: {
// 		danger: 'red',
// 	},
// });

// export default function CustomStyles() {
// 	return (
// 		<ThemeProvider theme={theme}>
// 			<KpButton />
// 		</ThemeProvider>
// 	);
// }

export default KpButton;
