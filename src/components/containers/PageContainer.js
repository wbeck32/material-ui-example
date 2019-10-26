import React, { Component } from 'react';
import Header from '../common/Header';
import ActionArea from '../common/ActionArea';
import Footer from '../common/Footer';
import useTheme from '@material-ui/core/styles/useTheme';

class PageContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: false,
		};
	}
	componentDidCatch = (err, errInfo) => {
		console.log('err, errInfo: ', err, errInfo);
	};

	render() {
		console.log('this in page container: ', this);
		const { key } = this.state;
		// const theme = (useTheme = () => {});
		// console.log('theme: ', theme);
		return (
			<div>
				<Header />
				<ActionArea key={key} theme={this.props.theme} />
				<Footer />
			</div>
		);
	}
}

export default PageContainer;
