import React, { Component } from 'react';
import Header from '../common/Header';
import ActionArea from '../common/ActionArea';
import Footer from '../common/Footer';

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
		const { key } = this.state;
		console.log('this in page container: ', this);
		return (
			<div>
				<Header />
				<ActionArea key={key} />
				<Footer />
			</div>
		);
	}
}

export default PageContainer;
