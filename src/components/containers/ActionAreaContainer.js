import React from 'react';
import ActionArea from '../common/ActionArea';

class ActionAreaContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			someKey: 'someValue',
		};
	}

	render() {
		return (
			<div>
				<ActionArea />
			</div>
		);
	}

	componentDidMount() {
		this.setState({
			someKey: 'otherValue',
		});
	}
}

export default ActionAreaContainer;
