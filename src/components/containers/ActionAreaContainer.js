import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionArea from '../common/ActionArea';
import KpButton from '../formInputs/KpButton';

class ActionAreaContainer extends Component {
	constructor(props) {
		super(props),
			(this.state = {
				key: false,
			});
	}

	render() {
		console.log('this: ', this.state);
		return (
			<div>
				<ActionArea>
					<KpButton>Button</KpButton>
				</ActionArea>
			</div>
		);
	}
}
const mapStateToProps = state => {
	console.log('this: ', this);

	console.log('state: ', state);
	return {
		key: state.key,
	};
};

export default connect(mapStateToProps)(ActionAreaContainer);
