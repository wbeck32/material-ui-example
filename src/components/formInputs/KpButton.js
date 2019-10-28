import React from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import KpButtonCss from './KpButton.css';

const KpBS = withStyles({
	root: { KpButtonCss },
})(({ classes }) => <button className={classes}>{classes.root}</button>);

const KpButton = props => {
	const kpTheme = useTheme();
	const ref = React.createRef();
	const handleClick = e => {
		console.log('e: ', e.target);
		ref.current.focus();
	};

	return (
		<div>
			<KpBS />
			<button
				className={kpTheme.palette.common.black}
				ref={ref}
				children={props.children}
				onClick={handleClick}
			></button>
		</div>
	);
};

export default KpButton;
